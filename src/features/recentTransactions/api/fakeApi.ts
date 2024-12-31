export interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: string;
  type: "credit" | "debit";
}

export const mockTransactions: Transaction[] = [
  {
    id: 1,
    description: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    type: "debit",
  },
  {
    id: 2,
    description: "Deposit PayPal",
    date: "25 January 2021",
    amount: "+$2,500",
    type: "credit",
  },
  {
    id: 3,
    description: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    type: "credit",
  },
];

export const fetchRecentTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 100);
  });
};
