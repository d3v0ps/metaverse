import { FSPackagesRepositoryAdapter } from '@central-factory/persistence/adapters/fs-packages.adapter';
import { Repository } from '@central-factory/persistence/repository';
import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { DomainService } from '../domain/domain.service';
import { packageGenerators } from '../providers/generators.providers';
import { PackagesController } from './packages.controller';
import { PackagesGenerator } from './packages.generator';
import { PackagesResolver } from './packages.resolver';
import { PackagesService } from './packages.service';

export const PACKAGES_REPOSITORY_TOKEN = 'PACKAGES_REPOSITORY';
export const PACKAGES_GENERATORS_TOKEN = 'PACKAGES_GENERATORS';

@Module({
  imports: [HttpModule, CacheModule.register(), DomainModule],
  controllers: [PackagesController],
  providers: [
    {
      provide: PACKAGES_GENERATORS_TOKEN,
      useValue: packageGenerators,
    },
    {
      provide: PACKAGES_REPOSITORY_TOKEN,
      useFactory: (generator) =>
        new Repository(new FSPackagesRepositoryAdapter(generator)),
      inject: [PackagesGenerator],
    },
    {
      provide: PackagesService,
      useFactory: (repository) => new PackagesService(repository),
      inject: [PACKAGES_REPOSITORY_TOKEN],
    },
    {
      provide: PackagesGenerator,
      useFactory: (domainsService, generators) =>
        new PackagesGenerator(domainsService, generators),
      inject: [DomainService, PACKAGES_GENERATORS_TOKEN],
    },
    PackagesResolver,
  ],
  exports: [PackagesResolver, PackagesService],
})
export class PackagesModule {}
