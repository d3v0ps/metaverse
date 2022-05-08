/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

registerEnumType(Priority, {
  name: 'Priority',
  description: '',
});


@ObjectType()
export class Topic {
  @Field((type) => [String])
  applications?: string[];

  @Field()
  background?: string;

  @Field((type) => [String])
  categories?: string[];

  @Field()
  createdAt?: string;

  @Field()
  description?: string;

  @Field()
  icon?: string;

  @Field()
  id?: string;

  @Field()
  media?: any;

  @Field((type) => Priority)
  priority?: Priority;

  @Field((type) => [String])
  shortcuts?: string[];

  @Field()
  themeColor?: string;

  @Field()
  title?: string;

  @Field((type) => [Trigger])
  triggers?: Trigger[];

  @Field()
  updatedAt?: string;
}

@ObjectType()
export class Trigger {
  @Field()
  name?: string;

  @Field()
  rules?: any;
}

