import { FSTreeRepositoryAdapter } from '@central-factory/persistence/adapters/fs-tree.adapter';
import { GoogleSearchRepositoryAdapter } from '@central-factory/persistence/adapters/google-search.adapter';
import { TAGS_PROVIDER } from '@central-factory/persistence/data/tags';
import { FSTreeRepository } from '@central-factory/persistence/repositories/fs-tree.repository';
import { GoogleSearchRepository } from '@central-factory/persistence/repositories/google-search.repository';
import { Provider } from '@nestjs/common';
import { DocumentsService } from './documents.service';

export const DOCUMENTS_REPOSITORY = 'documentsRepository';
export const DOCUMENTS_REPOSITORY_ADAPTER = 'documentsRepositoryAdapter';
export const DOCUMENTS_REPOSITORY_ADAPTER_OPTIONS =
  'documentsRepositoryAdapterOptions';
export const GOOGLE_SEARCH_REPOSITORY = 'googleSearchRepository';
export const GOOGLE_SEARCH_REPOSITORY_ADAPTER = 'googleSearchRepositoryAdapter';

export const documentsProviders: Provider[] = [
  TAGS_PROVIDER,
  {
    provide: DOCUMENTS_REPOSITORY_ADAPTER_OPTIONS,
    useValue: {
      tags: TAGS_PROVIDER.useValue,
      mountFolder: `${process.cwd()}/mnt/{rootFolder}`,
      roots: ['.'],
    },
  },
  {
    provide: DOCUMENTS_REPOSITORY_ADAPTER,
    useFactory: (opt) => new FSTreeRepositoryAdapter(opt),
    inject: [DOCUMENTS_REPOSITORY_ADAPTER_OPTIONS],
  },
  {
    provide: DOCUMENTS_REPOSITORY,
    useFactory: (adapter) => new FSTreeRepository(adapter),
    inject: [DOCUMENTS_REPOSITORY_ADAPTER],
  },
  {
    provide: GOOGLE_SEARCH_REPOSITORY_ADAPTER,
    useFactory: () => new GoogleSearchRepositoryAdapter(),
  },
  {
    provide: GOOGLE_SEARCH_REPOSITORY,
    useFactory: (adapter) => new GoogleSearchRepository(adapter),
    inject: [GOOGLE_SEARCH_REPOSITORY_ADAPTER],
  },
  {
    provide: DocumentsService,
    useFactory: (documents, googleSearch) =>
      new DocumentsService(documents, googleSearch),
    inject: [DOCUMENTS_REPOSITORY, GOOGLE_SEARCH_REPOSITORY],
  },
];
