import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExchangeRatesController } from './exchange-rates.controller';
import { ExchangesRatesService } from './exchanges-rates.service';

@Module({
  imports: [HttpModule],
  controllers: [ExchangeRatesController],
  providers: [ExchangesRatesService],
})
export class ExchangeRatesModule {}
