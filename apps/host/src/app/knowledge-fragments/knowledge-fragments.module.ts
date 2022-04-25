import { Module } from '@nestjs/common';
import { KnowledgeFragmentsController } from './knowledge-fragments.controller';
import { KnowledgeFragmentsService } from './knowledge-fragments.service';
import { MarkdownKnowledgeFragmentsDatabase } from './markdown-knowledge-fragments.database';
import { MarkdownKnowledgeFragmentsRepository } from './markdown-knowledge-fragments.repository';

@Module({
  imports: [],
  controllers: [KnowledgeFragmentsController],
  providers: [
    KnowledgeFragmentsService,
    MarkdownKnowledgeFragmentsDatabase,
    MarkdownKnowledgeFragmentsRepository,
  ],
})
export class KnowledgeFragmentsModule {}
