import { mockTransactions } from './mockData';

export interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: string;
  type: "credit" | "debit";
}

export const fetchRecentTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 100);
  });
};
