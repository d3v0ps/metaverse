import { CacheModule, Module } from '@nestjs/common';
import { domainProviders } from './domain.providers';
import { DomainService } from './domain.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [],
  providers: [...domainProviders],
  exports: [DomainService],
})
export class DomainModule {}
