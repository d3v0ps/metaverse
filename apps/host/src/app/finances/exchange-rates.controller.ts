import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { RenderInterceptor } from '../interceptors/render.interceptor';
import { ExchangesRatesService } from './exchanges-rates.service';

@Controller()
export class ExchangeRatesController {
  constructor(private readonly service: ExchangesRatesService) {}

  @Get('')
  @UseInterceptors(new RenderInterceptor('item'), CacheInterceptor)
  async getExchangeRates() {
    return this.service.getExchangeRates();
  }
}
