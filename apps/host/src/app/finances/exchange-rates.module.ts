import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { ExchangeRatesController } from './exchange-rates.controller';
import { ExchangesRatesService } from './exchanges-rates.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: 36000,
    }),
  ],
  controllers: [ExchangeRatesController],
  providers: [ExchangesRatesService],
})
export class ExchangeRatesModule {}
