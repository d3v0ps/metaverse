import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkdownKnowledgeFragmentsDatabase } from './knowledge-fragments/markdown-knowledge-fragments.database';
import { MarkdownKnowledgeFragmentsRepository } from './knowledge-fragments/markdown-knowledge-fragments.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    MarkdownKnowledgeFragmentsDatabase,
    MarkdownKnowledgeFragmentsRepository,
  ],
})
export class AppModule {}
