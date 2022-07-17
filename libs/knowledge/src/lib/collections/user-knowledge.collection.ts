import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import type { RxJsonSchema } from 'rxdb/dist/types/types';
import {
  KnowledgeSymbolDocType,
  knowledgeSymbolSchema,
} from './schemas/knowledge-symbol.schema';

export const userknowledgeSymbolSchema: RxJsonSchema<
  Omit<KnowledgeSymbolDocType, '_attachments'>
> = {
  ...knowledgeSymbolSchema,
  title: 'User Knowledge Symbols',
  description: 'User Knowledge Symbols',
};

export const USER_KNOWLEDGE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'userknowledge',
    creator: {
      schema: knowledgeSymbolSchema,
    },
  },
  multi: true,
};
