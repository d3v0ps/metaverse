

import { PubSub, PUB_SUB_PROVIDER } from '@central-factory/platforms/languages/gql/providers/pubsub';
import { Inject } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Service } from './.service';
import { , CreateInput, CreatePayload } from './.model';

import {  } from '../models';

@Resolver((of) => )
export class Resolver {
  constructor(
    @Inject(PUB_SUB_PROVIDER) private pubSub: PubSub,
    private service:  Service
  ) {}

  @Subscription((returns) =>  AddedMessage<>)
  Added() {
    return this.service.subscribe('Added');
  }

  @Subscription((returns) =>  UpdatedMessage<>)
  Updated() {
    return this.service.subscribe('Updated');
  }

  @Subscription((returns) =>  DeletedMessage<>)
  Deleted() {
    return this.service.subscribe('Deleted');
  }

  @Query((returns) => FoundAllMessage<>)
  async findAll(
    @Args('payload') payload: FoundAllPayload<>
  ): Promise<FoundAllMessage<>> {
    return this.service.findAll(payload);
  }

  @Query((returns) => FoundOneMessage<>)
  async findOne(
    @Args('payload') payload: FindOnePayload<>
  ): Promise<FoundOneMessage<>> {
    return this.service.findOne(payload);
  }

  @Mutation(returns => CreatedMessage<>)
  create(

    @Args('payload') payload: CreatePayload<>
  ): CreatePayload<> {
    return this.service.create(payload);
  }

  @Mutation(returns => UpdatedMessage<>)
  update(

    @Args('payload') payload: UpdatePayload<>
  ): UpdatePayload<> {
    return this.service.update(payload);
  }

  @Mutation(returns => DeletedMessage<>)
  delete(

    @Args('payload') payload: DeletePayload<>
  ): CreatePayload<> {
    return this.service.delete(payload);
  }
}
