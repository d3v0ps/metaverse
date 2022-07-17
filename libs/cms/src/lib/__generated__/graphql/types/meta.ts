/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Int, Field, ObjectType, createUnionType, registerEnumType, Scalar, CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

// TODO: Fix empty cases (see Volcano)

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


export enum ResourceStateEnum {
  /**
 * draft
 */
  Draft = 'draft',
  /**
 * published
 */
  Published = 'published',
  /**
 * archived
 */
  Archived = 'archived',
  /**
 * deleted
 */
  Deleted = 'deleted',
}

registerEnumType(ResourceStateEnum, {
  name: 'ResourceStateEnum',
  description: ``,
});

@ObjectType({
  description: ``,
})
export class ResourceState {
  @Field((type) => ResourceStateEnum)
  
  value!: ResourceStateEnum;
}



export enum VisibilityEnum {
  /**
 * hidden
 */
  Hidden = 'hidden',
  /**
 * visible
 */
  Visible = 'visible',
}

registerEnumType(VisibilityEnum, {
  name: 'VisibilityEnum',
  description: ``,
});

@ObjectType({
  description: ``,
})
export class Visibility {
  @Field((type) => VisibilityEnum)
  
  value!: VisibilityEnum;
}



export enum ServerTypeEnum {
  /**
 * portal
 */
  Portal = 'portal',
  /**
 * local
 */
  Local = 'local',
  /**
 * remote
 */
  Remote = 'remote',
}

registerEnumType(ServerTypeEnum, {
  name: 'ServerTypeEnum',
  description: ``,
});

@ObjectType({
  description: ``,
})
export class ServerType {
  @Field((type) => ServerTypeEnum)
  
  value!: ServerTypeEnum;
}


// #endregion

// #region Primitive Scalars
/**
 * =================
 * Primitive Scalars
 * =================
 */

/**
 * The string type
 */
export type StringType = string;
@ObjectType({
  description: `The string type`,
})
/**
 * The string type
 */
export class StringScalar {
  @Field((type) => String)
  /**
 * The string type
 */
  value!: StringType;
}

/**
 * The number type
 */
export type NumberType = number;
@ObjectType({
  description: `The number type`,
})
/**
 * The number type
 */
export class NumberScalar {
  @Field((type) => Int)
  /**
 * The number type
 */
  value!: NumberType;
}

/**
 * The date type
 */
export type DateType = string;
@ObjectType({
  description: `The date type`,
})
/**
 * The date type
 */
export class DateScalar {
  @Field((type) => String)
  /**
 * The date type
 */
  value!: DateType;
}

/**
 * The boolean type
 */
export type BooleanType = boolean;
@ObjectType({
  description: `The boolean type`,
})
/**
 * The boolean type
 */
export class BooleanScalar {
  @Field((type) => Boolean)
  /**
 * The boolean type
 */
  value!: BooleanType;
}

// #endregion

// #region Custom Scalars
/**
 * ==============
 * Custom Scalars
 * ==============
 */

// #endregion

// #region Types
/**
 * ==============
 * Types
 * ==============
 */

@ObjectType({
  description: `The manageable type`
})
/**
 * The manageable type
 */
export class Manageable {
  @Field((type) => Meta)
  /**
 * The meta of the manageable
 */
  meta?: Meta;
}

@ObjectType({
  description: `The meta type`
})
/**
 * The meta type
 */
export class Meta {
  @Field((type) => [Server])
  /**
 * The servers of the meta
 */
  servers?: Server[];
  @Field((type) => Visibility)
  /**
 * The visibility of the meta
 */
  visibility?: Visibility;
  @Field((type) => JSON)
  /**
 * The tags of the meta
 */
  tags!: Record<string, any>;
  @Field((type) => ResourceState)
  /**
 * The state of the meta
 */
  state!: ResourceState;
  @Field((type) => [Manageable])
  /**
 * The related of the meta
 */
  related!: Manageable[];
  @Field((type) => Pagination)
  /**
 * The pagination of the meta
 */
  pagination?: Pagination;
  @Field((type) => StringScalar)
  /**
 * The title of the meta
 */
  title!: StringScalar;
  @Field((type) => StringScalar)
  /**
 * The subject of the meta
 */
  subject?: StringScalar;
  @Field((type) => StringScalar)
  /**
 * The description of the meta
 */
  description?: StringScalar;
  @Field((type) => StringScalar)
  /**
 * The referenceId of the meta
 */
  referenceId?: StringScalar;
  @Field((type) => StringScalar)
  /**
 * The referenceUrl of the meta
 */
  referenceUrl?: StringScalar;
  @Field((type) => StringScalar)
  /**
 * The createdBy of the meta
 */
  createdBy?: StringScalar;
  @Field((type) => DateScalar)
  /**
 * The createdAt of the meta
 */
  createdAt?: DateScalar;
  @Field((type) => StringScalar)
  /**
 * The updatedBy of the meta
 */
  updatedBy?: StringScalar;
  @Field((type) => DateScalar)
  /**
 * The updatedAt of the meta
 */
  updatedAt?: DateScalar;
  @Field((type) => StringScalar)
  /**
 * The publishedBy of the meta
 */
  publishedBy?: StringScalar;
  @Field((type) => DateScalar)
  /**
 * The publishedAt of the meta
 */
  publishedAt?: DateScalar;
  @Field((type) => StringScalar)
  /**
 * The deletedBy of the meta
 */
  deletedBy?: StringScalar;
  @Field((type) => DateScalar)
  /**
 * The deletedAt of the meta
 */
  deletedAt?: DateScalar;
}

@ObjectType({
  description: `The server type`
})
/**
 * The server type
 */
export class Server {
  @Field((type) => StringScalar)
  /**
 * The id of the server
 */
  id?: StringScalar;
  @Field((type) => StringScalar)
  /**
 * The name of the server
 */
  name?: StringScalar;
  @Field((type) => ServerType)
  /**
 * The type of the server
 */
  type?: ServerType;
}

@ObjectType({
  description: `The pagination type`
})
/**
 * The pagination type
 */
export class Pagination {
  @Field((type) => NumberScalar)
  /**
 * The page of the pagination
 */
  page!: NumberScalar;
  @Field((type) => NumberScalar)
  /**
 * The pageSize of the pagination
 */
  pageSize!: NumberScalar;
  @Field((type) => NumberScalar)
  /**
 * The total of the pagination
 */
  total!: NumberScalar;
  @Field((type) => NumberScalar)
  /**
 * The totalPages of the pagination
 */
  totalPages!: NumberScalar;
  @Field((type) => BooleanScalar)
  /**
 * The hasNextPage of the pagination
 */
  hasNextPage!: BooleanScalar;
  @Field((type) => BooleanScalar)
  /**
 * The hasPreviousPage of the pagination
 */
  hasPreviousPage!: BooleanScalar;
  @Field((type) => NumberScalar)
  /**
 * The nextPage of the pagination
 */
  nextPage!: NumberScalar;
  @Field((type) => NumberScalar)
  /**
 * The previousPage of the pagination
 */
  previousPage!: NumberScalar;
  @Field((type) => NumberScalar)
  /**
 * The firstPage of the pagination
 */
  firstPage!: NumberScalar;
  @Field((type) => NumberScalar)
  /**
 * The lastPage of the pagination
 */
  lastPage!: NumberScalar;
}


// #endregion

// #region Inferred Union Types
/**
 * ===============================
 * Inferred Union Types from Props
 * ===============================
 */

// #endregion

// #region Type Roots
/**
 * ============
 * Type Roots
 * ============
 */

export enum CmsMetaTypes {
  String = 'String',
  Number = 'Number',
  Date = 'Date',
  Boolean = 'Boolean',
  Manageable = 'Manageable',
  Meta = 'Meta',
  Server = 'Server',
  Pagination = 'Pagination',
}
registerEnumType(CmsMetaTypes, {
  name: 'CmsMetaTypes',
  description: `CmsMeta Types Enum`,
});

@ObjectType()
export class CmsMeta {
}
// #endregion
