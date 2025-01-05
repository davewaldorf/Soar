import data from './contacts.json';

export interface Contact {
  id: number;
  name: string;
  role: string;
  image: string;
}

export function fetchRecentTransactions(): Promise<Contact[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data); 
    }, 1000);
  });
}
