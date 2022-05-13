import { FSTreeRepositoryAdapter } from '@central-factory/persistence/adapters/fs-tree.adapter';
import { TAGS_PROVIDER } from '@central-factory/persistence/data/tags';
import { FSTreeRepository } from '@central-factory/persistence/repositories/fs-tree.repository';
import { TAGS_PROVIDER_INJECTION_TOKEN } from '@central-factory/persistence/repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [
    TAGS_PROVIDER,
    {
      provide: FSTreeRepositoryAdapter,
      useClass: FSTreeRepositoryAdapter,
      inject: [TAGS_PROVIDER_INJECTION_TOKEN],
    },
    {
      provide: FSTreeRepository,
      useClass: FSTreeRepository,
      inject: [FSTreeRepositoryAdapter],
    },
  ],
  exports: [FSTreeRepository, FSTreeRepositoryAdapter],
})
export class DatabaseModule {}
