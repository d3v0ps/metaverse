/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PubSub, PUB_SUB_PROVIDER } from '@central-factory/platforms/languages/gql/providers/pubsub';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Document } from '../types';

import {
  DocumentFindAllPayload,
  DocumentFoundAllMessage,
  DocumentFindOnePayload,
  DocumentFoundOneMessage,
  DocumentCreatePayload,
  DocumentCreatedMessage,
  DocumentUpdatePayload,
  DocumentUpdatedMessage,
  DocumentDeletePayload,
  DocumentDeletedMessage,
 } from '../dtos';

// import { DocumentService } from './document.service';
// import { Document, CreateDocumentInput, CreateDocumentPayload } from './document.model';

@Resolver((of) => Document)
export class DocumentResolver {
  constructor(
    @Inject(PUB_SUB_PROVIDER) private pubSub: PubSub,
    private service:  /** DocumentService **/ any,
  ) {}

  @Subscription((returns) =>  DocumentCreatedMessage)
  DocumentCreated() {
    return this.service.subscribe('DocumentCreated');
  }

  @Subscription((returns) =>  DocumentUpdatedMessage)
  DocumentUpdated() {
    return this.service.subscribe('DocumentUpdated');
  }

  @Subscription((returns) =>  DocumentDeletedMessage)
  DocumentDeleted() {
    return this.service.subscribe('DocumentDeleted');
  }

  @Query((returns) => DocumentFoundAllMessage)
  async findAllDocument(
    @Args('payload') payload: DocumentFindAllPayload
  ): Promise<DocumentFoundAllMessage> {
    return this.service.findAll(payload);
  }

  @Query((returns) => DocumentFoundOneMessage)
  async findOneDocument(
    @Args('payload') payload: DocumentFindOnePayload
  ): Promise<DocumentFoundOneMessage> {
    return this.service.findOne(payload);
  }

  @Mutation(returns => DocumentCreatedMessage)
  createDocument(

    @Args('payload') payload: DocumentCreatePayload
  ): DocumentCreatedMessage {
    return this.service.create(payload);
  }

  @Mutation(returns => DocumentUpdatedMessage)
  updateDocument(

    @Args('payload') payload: DocumentUpdatePayload
  ): DocumentUpdatedMessage {
    return this.service.update(payload);
  }

  @Mutation(returns => DocumentDeletedMessage)
  deleteDocument(

    @Args('payload') payload: DocumentDeletePayload
  ): DocumentDeletedMessage {
    return this.service.delete(payload);
  }
}
