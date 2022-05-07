




export type Transaction = {
  id: string;
  date: string;
  description?: string;
  amount: string;
  currency: string;
  account: string;
  category?: string;
  tags: string[];
  origin: string;
  destination: string;
  invoice?: string;
}


export type Root = Transaction;
