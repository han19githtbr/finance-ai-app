import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-1 fill-primary" size={9} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger bg-opacity-10 font-bold text-danger hover:bg-muted">
        <CircleIcon className="mr-1 fill-danger" size={9} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-blue-500 bg-opacity-10 font-bold text-blue-500 hover:bg-muted">
      <CircleIcon className="mr-1 fill-blue-500" size={9} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
