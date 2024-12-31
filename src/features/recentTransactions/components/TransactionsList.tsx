import React from "react";
import styled from "styled-components";
import TransactionCard from "./TransactionCard";
import { Transaction } from "../api/fakeApi";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
`;

const TransactionsList: React.FC<{ transactions: Transaction[] }> = ({
  transactions,
}) => {
  return (
    <List>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </List>
  );
};

export default TransactionsList;
