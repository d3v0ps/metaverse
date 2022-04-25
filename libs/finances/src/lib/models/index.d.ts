import { Account } from './account';
import { Balance } from './balance';
import { Invoice } from './invoice';
import { Product } from './product';
import { Tax } from './tax';
import { Transaction } from './transaction';
import { Wallet } from './wallet';

export type Root =
  | Account
  | Balance
  | Invoice
  | Product
  | Tax
  | Transaction
  | Wallet;
