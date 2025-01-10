import React, { useEffect } from "react";
import TransactionsList from "./components/TransactionsList";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchTransactionsThunk } from "../../store/slices/transactionsSlice";

const RecentTransactions: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  return (
    <TransactionsList transactions={transactions} />
  );
};

export default RecentTransactions;
