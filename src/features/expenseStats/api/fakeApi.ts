import { mockExpenseData } from "./mockData";

export interface ExpenseData {
  label: string;
  value: number;
  color: string;
}

export const fetchExpenseData = (): Promise<ExpenseData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockExpenseData);
    }, 1000); 
  });
};
