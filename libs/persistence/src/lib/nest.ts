import { Module } from '@nestjs/common';
import { FSTreeRepositoryAdapter } from './adapters/fs-tree.adapter';
import { GoogleSearchRepositoryAdapter } from './adapters/google-search.adapter';
import { TAGS_PROVIDER } from './data/tags';
import { FSTreeRepository } from './repositories/fs-tree.repository';
import { GoogleSearchRepository } from './repositories/google-search.repository';

export const FS_TREE_REPOSITORY_ADAPTER_OPTIONS_TOKEN =
  'fsTreeRepositoryAdapterOptions';

@Module({
  imports: [],
  providers: [
    TAGS_PROVIDER,
    {
      provide: FS_TREE_REPOSITORY_ADAPTER_OPTIONS_TOKEN,
      useValue: {
        tags: TAGS_PROVIDER.useValue,
        mountFolder: `${process.cwd()}/mnt/{rootFolder}`,
        roots: ['.'],
      },
    },
    {
      provide: FSTreeRepositoryAdapter,
      useFactory: (opt) => new FSTreeRepositoryAdapter(opt),
      inject: [FS_TREE_REPOSITORY_ADAPTER_OPTIONS_TOKEN],
    },
    {
      provide: FSTreeRepository,
      useClass: FSTreeRepository,
      inject: [FSTreeRepositoryAdapter],
    },
    {
      provide: GoogleSearchRepositoryAdapter,
      useClass: GoogleSearchRepositoryAdapter,
    },
    {
      provide: GoogleSearchRepository,
      useClass: GoogleSearchRepository,
      inject: [GoogleSearchRepositoryAdapter],
    },
  ],
  exports: [FSTreeRepository, GoogleSearchRepository],
})
export class PersistenceModule {}
