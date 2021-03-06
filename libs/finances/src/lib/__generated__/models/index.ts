/* eslint-disable @typescript-eslint/no-explicit-any */

export type Account = {
  balance: string;

  createdAt?: any;

  currency?: string;

  description?: string;

  id: string;

  name: string;

  referenceId?: string;

  type: AccountType;

  updatedAt?: any;
  _attachments?: any;
};

export enum AccountType {
  Cash = 'Cash',
  Bank = 'Bank',
  CreditCard = 'CreditCard',
  DebitCard = 'DebitCard',
  RechargeCard = 'RechargeCard',
  Loan = 'Loan',
  Crypto = 'Crypto',
  Stock = 'Stock',
  Other = 'Other',
};

export type Balance = {
  crypto: string;

  fiat: string;

  stocks: string;

  total: string;
  _attachments?: any;
};

export type Invoice = {
  createdAt?: string;

  id: string;

  items?: InvoiceItem[];

  paidAt?: string;

  receiver?: string;

  sender?: string;

  state?: InvoiceState;

  total?: string;

  updatedAt?: string;
  _attachments?: any;
};

export type InvoiceItem = {
  createdAt?: any;

  description?: string;

  id?: string;

  name?: string;

  price?: number;

  productId?: string;

  quantity?: number;

  updatedAt?: any;
  _attachments?: any;
};

export enum InvoiceState {
  Draft = 'draft',
  Sent = 'sent',
  Paid = 'paid',
};

export type Product = {
  description?: string;

  name: string;

  originalPrice: number;

  originalPriceCurrency: string;

  price: number;
  _attachments?: any;
};

export type Tax = {
  createdAt: any;

  financialEntityCode: string;

  id: string;

  name: string;

  period: TaxPeriod;

  rate: number;

  updatedAt: any;
  _attachments?: any;
};

export type TaxPeriod = {
  end: any;

  payEnd: any;

  payStart: any;

  start: any;
  _attachments?: any;
};

export type Transaction = {
  account: string;

  amount: string;

  category?: string;

  currency: string;

  date: string;

  description?: string;

  destination: string;

  id: string;

  invoice?: string;

  origin: string;

  tags: string[];
  _attachments?: any;
};

export type Wallet = {
  accounts: Account[];

  balance: Balance;

  id: string;

  name: string;

  worldId: string;
  _attachments?: any;
};

