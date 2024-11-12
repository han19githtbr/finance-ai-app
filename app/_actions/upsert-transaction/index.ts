"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  upsertTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (params.id) {
    // Se o ID estiver presente, use upsert para atualizar ou criar
    await db.transaction.upsert({
      update: { ...params, userId },
      create: { ...params, userId },
      where: { id: params.id },
    });
  } else {
    // Se o ID estiver ausente, use create para inserir um novo registro
    await db.transaction.create({
      data: { ...params, userId },
    });
  }

  revalidatePath("/transactions");
};
