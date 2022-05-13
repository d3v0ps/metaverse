import { GoogleSearchRepository } from '@central-factory/persistence/repositories/google-search.repository';
import { CacheModule, Module } from '@nestjs/common';
import { MarkdownKnowledgeFragmentsDatabase } from '../knowledge-fragments/markdown-knowledge-fragments.database';
import { MarkdownKnowledgeFragmentsRepository } from '../knowledge-fragments/markdown-knowledge-fragments.repository';
import { DocumentsController } from './documents.controller';
import {
  documentsProviders,
  GOOGLE_SEARCH_REPOSITORY,
} from './documents.providers';
import { DocumentsResolver } from './documents.resolver';
import { DocumentTreeResolver } from './tree.resolver';
@Module({
  imports: [CacheModule.register()],
  controllers: [DocumentsController],
  providers: [
    ...documentsProviders,
    {
      provide: GoogleSearchRepository,
      useExisting: GOOGLE_SEARCH_REPOSITORY,
    },
    MarkdownKnowledgeFragmentsDatabase,
    MarkdownKnowledgeFragmentsRepository,
    DocumentsResolver,
    DocumentTreeResolver,
  ],
  exports: [DocumentsResolver, DocumentTreeResolver],
})
export class DocumentsModule {}
