/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, createUnionType, registerEnumType, Scalar, CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

// #region Dependecy Imports
/**
 * ==================
 * Dependency Imports
 * ==================
 */


// #endregion

// #region Enumerations
/**
 * ============
 * Enumerations
 * ============
 */

export enum ResourceState {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
  Deleted = 'deleted',
}
registerEnumType(ResourceState, {
  name: 'ResourceState',
  description: '',
});

export enum Visibility {
  Hidden = 'hidden',
  Visible = 'visible',
}
registerEnumType(Visibility, {
  name: 'Visibility',
  description: '',
});

export enum ServerType {
  Portal = 'portal',
  Local = 'local',
  Remote = 'remote',
}
registerEnumType(ServerType, {
  name: 'ServerType',
  description: '',
});

// #endregion

// #region Primitive Scalars
/**
 * =================
 * Primitive Scalars
 * =================
 */

export type StringType = string;
@Scalar('String')
export class StringScalar implements CustomScalar<StringType, StringType> {

  parseValue(value: unknown): StringType {
    return value as StringType;
  }

  serialize(value: unknown): StringType {
    return value as StringType;
  }

  parseLiteral(ast: ValueNode): StringType {
    return (ast as any).value || null;
  }
}

export type NumberType = number;
@Scalar('Number')
export class NumberScalar implements CustomScalar<NumberType, NumberType> {

  parseValue(value: unknown): NumberType {
    return value as NumberType;
  }

  serialize(value: unknown): NumberType {
    return value as NumberType;
  }

  parseLiteral(ast: ValueNode): NumberType {
    return (ast as any).value || null;
  }
}

export type DateType = string;
@Scalar('Date')
export class DateScalar implements CustomScalar<DateType, DateType> {

  parseValue(value: unknown): DateType {
    return value as DateType;
  }

  serialize(value: unknown): DateType {
    return value as DateType;
  }

  parseLiteral(ast: ValueNode): DateType {
    return (ast as any).value || null;
  }
}

export type BooleanType = boolean;
@Scalar('Boolean')
export class BooleanScalar implements CustomScalar<BooleanType, BooleanType> {

  parseValue(value: unknown): BooleanType {
    return value as BooleanType;
  }

  serialize(value: unknown): BooleanType {
    return value as BooleanType;
  }

  parseLiteral(ast: ValueNode): BooleanType {
    return (ast as any).value || null;
  }
}

// #endregion

// #region Custom Scalars
/**
 * ==============
 * Custom Scalars
 * ==============
 */

// #endregion

// #region Type Aliases
/**
 * ==============
 * Type Aliases
 * ==============
 */

// #endregion

// #region Union Types
/**
 * ===========
 * Union Types
 * ===========
 */

// #endregion

// #region Inferred Union Types
/**
 * ===============================
 * Inferred Union Types from Props
 * ===============================
 */

// #endregion

// #region Record Types
/**
 * ============
 * Record Types
 * ============
 */

// #endregion

// #region Object Types
/**
 * ============
 * Object Types
 * ============
 */

@ObjectType()
export class Manageable{
  @Field((type) => Meta)
  meta?: Meta;
}
@ObjectType()
export class Meta{
  @Field((type) => Server[])
  servers?: Server[];
  @Field((type) => Visibility)
  visibility?: Visibility;
  @Field((type) => Record<string, any>)
  tags!: Record<string, any>;
  @Field((type) => ResourceState)
  state!: ResourceState;
  @Field((type) => Manageable[])
  related!: Manageable[];
  @Field((type) => Pagination)
  pagination?: Pagination;
  @Field((type) => StringScalar)
  title!: StringType;
  @Field((type) => StringScalar)
  subject?: StringType;
  @Field((type) => StringScalar)
  description?: StringType;
  @Field((type) => StringScalar)
  referenceId?: StringType;
  @Field((type) => StringScalar)
  referenceUrl?: StringType;
  @Field((type) => StringScalar)
  createdBy?: StringType;
  @Field((type) => DateScalar)
  createdAt?: DateType;
  @Field((type) => StringScalar)
  updatedBy?: StringType;
  @Field((type) => DateScalar)
  updatedAt?: DateType;
  @Field((type) => StringScalar)
  publishedBy?: StringType;
  @Field((type) => DateScalar)
  publishedAt?: DateType;
  @Field((type) => StringScalar)
  deletedBy?: StringType;
  @Field((type) => DateScalar)
  deletedAt?: DateType;
}
@ObjectType()
export class Server{
  @Field((type) => StringScalar)
  id?: StringType;
  @Field((type) => StringScalar)
  name?: StringType;
  @Field((type) => ServerType)
  type?: ServerType;
}
@ObjectType()
export class Pagination{
  @Field((type) => NumberScalar)
  page!: NumberType;
  @Field((type) => NumberScalar)
  pageSize!: NumberType;
  @Field((type) => NumberScalar)
  total!: NumberType;
  @Field((type) => NumberScalar)
  totalPages!: NumberType;
  @Field((type) => BooleanScalar)
  hasNextPage!: BooleanType;
  @Field((type) => BooleanScalar)
  hasPreviousPage!: BooleanType;
  @Field((type) => NumberScalar)
  nextPage!: NumberType;
  @Field((type) => NumberScalar)
  previousPage!: NumberType;
  @Field((type) => NumberScalar)
  firstPage!: NumberType;
  @Field((type) => NumberScalar)
  lastPage!: NumberType;
}
// #endregion

// #region Type Roots
/**
 * ============
 * Type Roots
 * ============
 */

@ObjectType()
export class CmsMeta {
}
// #endregion
