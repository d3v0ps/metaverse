import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import {
  CreatedMessage as TCreatedMessage,
  CreatePayload as TCreatePayload,
  DeletedMessage as TDeletedMessage,
  DeletePayload as TDeletePayload,
  FindAllPayload as TFindAllPayload,
  FindOnePayload as TFindOnePayload,
  FoundAllMessage as TFoundAllMessage,
  FoundOneMessage as TFoundOneMessage,
  UpdatedMessage as TUpdatedMessage,
  UpdatePayload as TUpdatePayload,
} from '../typescript/models/dtos';

@ObjectType()
export class FindAllPayload<T> implements TFindAllPayload<T> {
  @Field((type) => GraphQLJSON)
  where?: Partial<T>;
}

@ObjectType()
export class FoundAllMessage<T> implements TFoundAllMessage<T> {
  @Field((type) => [GraphQLJSON])
  items: T[] = [];
}

@ObjectType()
export class FindOnePayload<T> implements TFindOnePayload<T> {
  @Field((type) => GraphQLJSON)
  where?: Partial<T>;
}

@ObjectType()
export class FoundOneMessage<T> implements TFoundOneMessage<T> {
  @Field((type) => GraphQLJSON)
  item?: T;
}

@ObjectType()
export class CreatePayload<T> implements TCreatePayload<T> {
  @Field((type) => GraphQLJSON)
  data!: T;
}

@ObjectType()
export class CreatedMessage<T = unknown> implements TCreatedMessage<T> {
  @Field()
  id!: string;
  @Field((type) => GraphQLJSON)
  item!: T;
}

@ObjectType()
export class UpdatePayload<T> implements TUpdatePayload<T> {
  @Field()
  id!: string;
  @Field((type) => GraphQLJSON)
  data!: T;
}

@ObjectType()
export class UpdatedMessage<T> implements TUpdatedMessage<T> {
  @Field()
  id!: string;
  @Field((type) => GraphQLJSON)
  item!: T;
}

@ObjectType()
export class DeletePayload<T> implements TDeletePayload<T> {
  @Field()
  id!: string;
}

@ObjectType()
export class DeletedMessage<T> implements TDeletedMessage<T> {
  @Field()
  id!: string;
  @Field((type) => GraphQLJSON)
  item?: T;
}
