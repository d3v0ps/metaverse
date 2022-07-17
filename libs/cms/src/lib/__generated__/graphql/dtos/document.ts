/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Field, ObjectType, } from '@nestjs/graphql';

import {
  FindAllPayload,
  FoundAllMessage,
  FindOnePayload,
  FoundOneMessage,
  CreatePayload,
  CreatedMessage,
  UpdatePayload,
  UpdatedMessage,
  DeletePayload,
  DeletedMessage,
 } from '@central-factory/platforms/languages/gql/dtos';


import { Document } from '../types';

@ObjectType()
export class DocumentFindAllPayload extends FindAllPayload<Document> {
  @Field((type) => Document)
  override where?: Partial<Document>;
}

@ObjectType()
export class DocumentFoundAllMessage extends FoundAllMessage<Document> {
  @Field((type) => [Document])
  override items: Document[] = [];
}

@ObjectType()
export class DocumentFindOnePayload extends FindOnePayload<Document> {
  @Field((type) => Document)
  override where?: Partial<Document>;
}

@ObjectType()
export class DocumentFoundOneMessage extends FoundOneMessage<Document> {
  @Field((type) => Document)
  override item?: Document;
}

@ObjectType()
export class DocumentCreatePayload extends CreatePayload<Document> {
  @Field((type) => Document)
  override data!: Partial<Document>;
}

@ObjectType()
export class DocumentCreatedMessage extends CreatedMessage<Document> {
  @Field((type) => Document)
  override item!: Document;
}

@ObjectType()
export class DocumentUpdatePayload extends UpdatePayload<Document> {
  @Field((type) => Document)
  override data!: Partial<Document>;
}

@ObjectType()
export class DocumentUpdatedMessage extends UpdatedMessage<Document> {
  @Field((type) => Document)
  override item!: Document;
}

@ObjectType()
export class DocumentDeletePayload extends DeletePayload<Document> {
}

@ObjectType()
export class DocumentDeletedMessage extends DeletedMessage<Document> {
  @Field((type) => Document)
  override item?: Document;
}
