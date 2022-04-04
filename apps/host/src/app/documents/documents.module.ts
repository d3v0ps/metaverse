import { Module } from '@nestjs/common';
import { DatabaseModule } from '../databases/database.module';
import { MarkdownKnowledgeFragmentsDatabase } from '../knowledge-fragments/markdown-knowledge-fragments.database';
import { MarkdownKnowledgeFragmentsRepository } from '../knowledge-fragments/markdown-knowledge-fragments.repository';
import { DocumentsController } from './documents.controller';
import { DocumentsResolver } from './documents.resolver';
import { DocumentsService } from './documents.service';
import { DocumentTreeResolver } from './tree.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentsController],
  providers: [
    DocumentsService,
    MarkdownKnowledgeFragmentsDatabase,
    MarkdownKnowledgeFragmentsRepository,
    DocumentsResolver,
    DocumentTreeResolver,
  ],
  exports: [DocumentsResolver, DocumentTreeResolver],
})
export class DocumentsModule {}
