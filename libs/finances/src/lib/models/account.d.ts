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
}

export type Account = {
  id: string;
  referenceId?: string;
  name: string;
  description?: string;
  type: AccountType;
  balance: string;
  currency?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
