import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
//import { db } from "@/app/_lib/prisma";

interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  userCanAddTransaction,
  expensesTotal,
}: SummaryCards) => {
  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={22} />}
        title="Saldo"
        amount={balance}
        size="large"
        userCanAddTransaction={userCanAddTransaction}
      />

      {/* Outros cards */}
      <div className="grid grid-cols-3 gap-4">
        <SummaryCard
          icon={<PiggyBankIcon size={22} className="text-blue-500" />}
          title="Investido"
          amount={investmentsTotal}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={22} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={22} className="text-red-600" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
