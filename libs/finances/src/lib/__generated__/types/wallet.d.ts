import { Account } from './account';
import { Balance } from './balance';

export { Account } from './account';
export { Balance } from './balance';

export type Wallet = {
  id: string;
  name: string;
  worldId: string;
  balance: Balance;
  accounts: Account[];
};

export type Root = Wallet;
