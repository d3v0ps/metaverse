/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field()
  balance?: string;

  @Field()
  createdAt?: any;

  @Field()
  currency?: string;

  @Field()
  description?: string;

  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  referenceId?: string;

  @Field((type) => AccountType)
  type?: AccountType;

  @Field()
  updatedAt?: any;
}

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

registerEnumType(AccountType, {
  name: 'AccountType',
  description: '',
});


@ObjectType()
export class Balance {
  @Field()
  crypto?: string;

  @Field()
  fiat?: string;

  @Field()
  stocks?: string;

  @Field()
  total?: string;
}

@ObjectType()
export class Invoice {
  @Field()
  createdAt?: string;

  @Field()
  id?: string;

  @Field((type) => [InvoiceItem])
  items?: InvoiceItem[];

  @Field()
  paidAt?: string;

  @Field()
  receiver?: string;

  @Field()
  sender?: string;

  @Field((type) => InvoiceState)
  state?: InvoiceState;

  @Field()
  total?: string;

  @Field()
  updatedAt?: string;
}

@ObjectType()
export class InvoiceItem {
  @Field()
  createdAt?: any;

  @Field()
  description?: string;

  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  price?: number;

  @Field()
  productId?: string;

  @Field()
  quantity?: number;

  @Field()
  updatedAt?: any;
}

export enum InvoiceState {
  draft = 'draft',
  sent = 'sent',
  paid = 'paid',
}

registerEnumType(InvoiceState, {
  name: 'InvoiceState',
  description: '',
});


@ObjectType()
export class Product {
  @Field()
  description?: string;

  @Field()
  name?: string;

  @Field()
  originalPrice?: number;

  @Field()
  originalPriceCurrency?: string;

  @Field()
  price?: number;
}

@ObjectType()
export class Tax {
  @Field()
  createdAt?: any;

  @Field()
  financialEntityCode?: string;

  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field((type) => TaxPeriod)
  period?: TaxPeriod;

  @Field()
  rate?: number;

  @Field()
  updatedAt?: any;
}

@ObjectType()
export class TaxPeriod {
  @Field()
  end?: any;

  @Field()
  payEnd?: any;

  @Field()
  payStart?: any;

  @Field()
  start?: any;
}

@ObjectType()
export class Transaction {
  @Field()
  account?: string;

  @Field()
  amount?: string;

  @Field()
  category?: string;

  @Field()
  currency?: string;

  @Field()
  date?: string;

  @Field()
  description?: string;

  @Field()
  destination?: string;

  @Field()
  id?: string;

  @Field()
  invoice?: string;

  @Field()
  origin?: string;

  @Field((type) => [String])
  tags?: string[];
}

@ObjectType()
export class Wallet {
  @Field((type) => [Account])
  accounts?: Account[];

  @Field((type) => Balance)
  balance?: Balance;

  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  worldId?: string;
}

