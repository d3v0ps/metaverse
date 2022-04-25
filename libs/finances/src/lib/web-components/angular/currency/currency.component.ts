import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyMapper } from '@central-factory/finances/mappers/currency.mapper';

export type CurrencyMood = 'neutral' | 'positive' | 'negative';

@Component({
  selector: 'cf-currency',
  template: `
    <span cfBlock="currency" [cfMod]="mood">
      <cf-typography [type]="typographyType">
        {{ displayValue }}
        <cf-svg-icon
          src="assets/icons/mdi/currency-{{
            displayCurrency || currencyType
          }}.svg"
        ></cf-svg-icon>
      </cf-typography>
    </span>
  `,
})
export class CurrencyComponent implements OnChanges {
  @Input() currencyType = 'eur';
  @Input() displayCurrency?: string;
  @Input() typographyType = 'h1';
  @Input() value?: string | number;
  @Input() mood: CurrencyMood = 'neutral';

  displayValue = '---';

  constructor(private currencyMapper: CurrencyMapper) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['value'] || !changes['value'].currentValue) {
      return;
    }

    const valueStr =
      typeof changes['value'].currentValue === 'number'
        ? changes['value'].currentValue.toString()
        : changes['value'].currentValue;

    if (
      !changes['displayCurrency'] ||
      !changes['displayCurrency'].currentValue
    ) {
      this.displayValue = valueStr;
      return;
    }

    this.currencyMapper
      .mapToCurrency(
        valueStr,
        changes['currencyType'].currentValue,
        changes['displayCurrency'].currentValue
      )
      .subscribe((value) => (this.displayValue = value));
  }
}
