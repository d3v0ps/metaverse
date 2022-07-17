/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { Profession } from '../types';

export type ProfessionDocType = Profession;
export type ProfessionDocument = RxDocument<ProfessionDocType>;
export type ProfessionCollection = RxCollection<ProfessionDocument>;

export const professionSchema = {
  additionalProperties: false,
  properties: {
    color: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    label: {
      type: 'string',
    },
    schools: {
      items: {
        type: 'string',
      },
      type: 'array',
    },
  },
  required: ['id'],
  type: 'object',
};

export const professionRxSchema: RxJsonSchema<
  Omit<ProfessionDocType, '_attachments'>
> = {
  ...(professionSchema as any),
  title: 'Profession',
  description: 'Profession',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userProfessionRxSchema: RxJsonSchema<
  Omit<ProfessionDocType, '_attachments'>
> = {
  ...(professionSchema as any),
  title: 'User Profession',
  description: 'User Profession',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const PROFESSION_COLLECTION_NAME = 'profession';

export const PROFESSION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: PROFESSION_COLLECTION_NAME,
    creator: {
      schema: professionRxSchema,
    },
  },
  multi: true,
};

export const USER_PROFESSION_COLLECTION_NAME = 'userprofession';

export const USER_PROFESSION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_PROFESSION_COLLECTION_NAME,
    creator: {
      schema: userProfessionRxSchema,
    },
  },
  multi: true,
};
