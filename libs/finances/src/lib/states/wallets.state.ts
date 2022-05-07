import { Injectable } from '@angular/core';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';
import {
  BehaviorSubject,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  demoTransactions,
  recurringTransactions,
} from '../data/demo/transactions.data';
import { demoWallets } from '../data/demo/wallets.data';
import { CurrencyMapper } from '../mappers/currency.mapper';
import {
  Account,
  AccountType,
  Balance,
  Transaction,
  Wallet,
} from '../__generated__/models';

@Injectable({
  providedIn: 'root',
})
export class WalletsState {
  selectedWallet$ = new BehaviorSubject<Wallet | undefined>(undefined);

  allWallets$ = new BehaviorSubject<Wallet[]>(demoWallets);
  worldWallets$ = new BehaviorSubject<Wallet[]>([]);
  worldBalance$ = new BehaviorSubject<Balance>({
    crypto: '0',
    fiat: '0',
    stocks: '0',
    total: '0',
  });
  selectedAccount$ = new BehaviorSubject<Account | undefined>(undefined);
  selectedAccountTransactions$ = new BehaviorSubject<Transaction[]>([]);
  selectedAccountRecurringTransactions$ = new BehaviorSubject<Transaction[]>(
    []
  );

  constructor(
    private readonly worldsState: WorldsState,
    private currencyMapper: CurrencyMapper
  ) {
    this.initialize();
  }

  initialize() {
    this.worldsState.selectedWorld$
      .pipe(
        switchMap((world) => {
          const wallets = this.allWallets$.value;
          const worldWallets = world
            ? wallets.filter((wallet) => wallet.worldId === world.id)
            : [];

          return this.calculateWorldBalance(worldWallets);
        }),
        tap(({ wallets, balance }) => {
          this.worldWallets$.next(wallets);
          this.worldBalance$.next(balance);

          if (wallets.length > 0) {
            this.selectWallet(wallets[0]);
          }
        })
      )
      .subscribe();
  }

  selectWallet(wallet: Wallet) {
    this.selectedWallet$.next(wallet);

    if (wallet.accounts.length > 0) {
      this.selectAccount(wallet.accounts[0]);
    }
  }

  selectAccount(account: Account) {
    this.selectedAccount$.next(account);

    const accountTransactions = demoTransactions.filter(
      (transaction) => transaction.account === account.id
    );
    const accountRecurringTransactions = recurringTransactions.filter(
      (transaction) => transaction.account === account.id
    );

    this.selectedAccountTransactions$.next(accountTransactions);
    this.selectedAccountRecurringTransactions$.next(
      accountRecurringTransactions
    );
  }

  private calculateWorldBalance(wallets: Wallet[]): Observable<{
    wallets: Wallet[];
    balance: Balance;
  }> {
    if (!wallets) {
      return of({
        wallets: [],
        balance: {
          crypto: '0',
          fiat: '0',
          stocks: '0',
          total: '0',
        },
      });
    }

    return forkJoin(
      wallets.map((wallet) => this.calculateWalletBalance(wallet))
    ).pipe(
      map((values) =>
        values.reduce<{
          wallets: Wallet[];
          balance: Balance;
        }>(
          (acc, wallet) => {
            acc.balance.crypto = (
              parseFloat(acc.balance.crypto) + parseFloat(wallet.balance.crypto)
            ).toFixed(2);
            acc.balance.fiat = (
              parseFloat(acc.balance.fiat) + parseFloat(wallet.balance.fiat)
            ).toFixed(2);
            acc.balance.stocks = (
              parseFloat(acc.balance.stocks) + parseFloat(wallet.balance.stocks)
            ).toFixed(2);
            acc.balance.total = (
              parseFloat(acc.balance.total) + parseFloat(wallet.balance.total)
            ).toFixed(2);

            acc.wallets.push(wallet);

            return acc;
          },
          {
            balance: {
              crypto: '0',
              fiat: '0',
              stocks: '0',
              total: '0',
            },
            wallets: [],
          }
        )
      )
    );
  }

  private calculateWalletBalance(wallet: Wallet): Observable<Wallet> {
    return forkJoin(
      wallet.accounts.map((account) =>
        this.currencyMapper
          .mapToUserCurrency(account.balance, account.currency || 'eur')
          .pipe(map((balance) => ({ balance, account })))
      )
    ).pipe(
      map((values) => {
        return values.reduce((acc, item) => {
          switch (item.account.type) {
            case AccountType.Crypto:
              acc.balance.crypto = (
                parseFloat(acc.balance.crypto) + parseFloat(item.balance)
              ).toFixed(2);
              break;
            case AccountType.Bank:
            case AccountType.Cash:
            case AccountType.CreditCard:
            case AccountType.RechargeCard:
            case AccountType.DebitCard:
            case AccountType.Loan:
            case AccountType.Other:
              acc.balance.fiat = (
                parseFloat(acc.balance.fiat) + parseFloat(item.balance)
              ).toFixed(2);
              break;
            case AccountType.Stock:
              acc.balance.stocks = (
                parseFloat(acc.balance.stocks) + parseFloat(item.balance)
              ).toFixed(2);
              break;
          }
          acc.balance.total = (
            parseFloat(acc.balance.total) + parseFloat(item.balance)
          ).toFixed(2);

          return acc;
        }, wallet);
      })
    );
  }
}
