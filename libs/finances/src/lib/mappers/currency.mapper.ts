import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';

export type CryptocurrencyListingsResponse = {
  data: {
    symbol: string;
    quote: {
      USD: {
        price: number;
      };
    };
  }[];
};

export type ExchangeRatesResponse = {
  base: string;
  rates: { [key: string]: number };
};

@Injectable({
  providedIn: 'root',
})
export class CurrencyMapper {
  private base = 'USD';
  private rates: Record<string, number> = {
    USD: 1,
    EUR: 0.92,
  };

  constructor(private http: HttpClient) {
    this.fetchExchangeRates().subscribe();
  }

  mapToUserCurrency(value: string, currencyType: string): Observable<string> {
    return this.mapToCurrency(value, currencyType, 'EUR');
  }

  mapToCurrency(
    value: string,
    currencyType: string,
    outputCurrencyType: string
  ): Observable<string> {
    if (currencyType.toUpperCase() === outputCurrencyType.toUpperCase()) {
      return of(value);
    }

    if (!this.rates[currencyType] || !this.rates[outputCurrencyType]) {
      return of('0');
    }

    if (Object.keys(this.rates).length === 2) {
      const obs = new Observable<void>((observer) => {
        setTimeout(() => {
          observer.next();
          observer.complete();
        }, 500);
      });

      return obs.pipe(
        switchMap(() =>
          this.mapToCurrency(value, currencyType, outputCurrencyType)
        )
      );
    }

    if (!this.rates[currencyType.toUpperCase()]) {
      return of('0');
    }

    const valueNumber = parseFloat(value);

    const rate = this.rates[currencyType.toUpperCase()] / this.rates[this.base];
    // USD value
    const baseValue = valueNumber / rate;

    // EUR value
    const outputValue =
      baseValue * this.rates[outputCurrencyType.toUpperCase()];

    return of(outputValue.toFixed(2));
  }

  private fetchExchangeRates() {
    return this.http
      .get<Record<string, number>>('http://localhost:3333/api/exchange-rates')
      .pipe(tap((result) => (this.rates = result)));
  }
}
