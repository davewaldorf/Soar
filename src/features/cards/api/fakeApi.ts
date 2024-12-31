import { mockCards } from "./mockData";

export interface CardType {
  id: number;
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export const fetchCards = (): Promise<CardType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCards);
    }, 100);
  });
};
