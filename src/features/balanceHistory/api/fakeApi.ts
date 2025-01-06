import { balanceHistoryMockData } from "./mockData";

export const fetchBalanceHistory = (): Promise<typeof balanceHistoryMockData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(balanceHistoryMockData);
    }, 1000); 
  });
};
