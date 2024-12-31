import React, { useEffect, useState } from "react";
import TransactionsList from "./components/TransactionsList";
import { fetchRecentTransactions, Transaction } from "./api/fakeApi";

const RecentTransactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchRecentTransactions().then(setTransactions);
  }, []);

  return (
    <TransactionsList transactions={transactions} />
  );
};

export default RecentTransactions;
