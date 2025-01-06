import { contacts } from "./contacts";

export interface Contact {
  id: number;
  name: string;
  role: string;
  image: string;
}

export function fetchRecentTransactions(): Promise<Contact[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(contacts); 
    }, 1000);
  });
}
