/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Permission {
  @Field()
  appId?: string;

  @Field()
  createdAt?: string;

  @Field()
  id?: string;

  @Field((type) => PermissionKind)
  kind?: PermissionKind;

  @Field((type) => PermissionMode)
  mode?: PermissionMode;

  @Field()
  target?: string;

  @Field()
  updatedAt?: string;
}

export enum PermissionKind {
  Collection = 'Collection',
}

registerEnumType(PermissionKind, {
  name: 'PermissionKind',
  description: '',
});


export enum PermissionMode {
  Read = 'Read',
  Write = 'Write',
  Delete = 'Delete',
}

registerEnumType(PermissionMode, {
  name: 'PermissionMode',
  description: '',
});


