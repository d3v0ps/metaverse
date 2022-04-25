import { Controller, Get } from '@nestjs/common';
import { ExchangesRatesService } from './exchanges-rates.service';

@Controller({
  path: 'exchange-rates',
})
export class ExchangeRatesController {
  constructor(private readonly service: ExchangesRatesService) {}

  @Get('')
  async getExchangeRates() {
    return this.service.getExchangeRates();
  }
}
