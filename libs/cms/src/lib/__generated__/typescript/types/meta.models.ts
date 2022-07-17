/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Int, createUnionType, registerEnumType, Scalar, CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

// TODO: fix datatype and custom aliases (not working anymore due to inheritance being applied on external layer)

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


export type ResourceState = {
  value: ResourceStateEnum;
};



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


export type Visibility = {
  value: VisibilityEnum;
};



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


export type ServerType = {
  value: ServerTypeEnum;
};


// #endregion

// #region Primitive Scalars
/**
 * =================
 * Primitive Scalars
 * =================
 */

export type StringType = string;
/**
 * The string type
 */
export type StringScalar = {
  value: StringType;
}

export type NumberType = number;
/**
 * The number type
 */
export type NumberScalar = {
  value: NumberType;
}

export type DateType = string;
/**
 * The date type
 */
export type DateScalar = {
  value: DateType;
}

export type BooleanType = boolean;
/**
 * The boolean type
 */
export type BooleanScalar = {
  value: BooleanType;
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


/**
 * The manageable type
 */
export type Manageable = {
  /**
 * The meta of the manageable
 */
  meta?: Meta;
};


/**
 * The meta type
 */
export type Meta = {
  /**
 * The servers of the meta
 */
  servers?: Server[];
  /**
 * The visibility of the meta
 */
  visibility?: Visibility;
  /**
 * The tags of the meta
 */
  tags: Record<string, any>;
  /**
 * The state of the meta
 */
  state: ResourceState;
  /**
 * The related of the meta
 */
  related: Manageable[];
  /**
 * The pagination of the meta
 */
  pagination?: Pagination;
  /**
 * The title of the meta
 */
  title: StringScalar;
  /**
 * The subject of the meta
 */
  subject?: StringScalar;
  /**
 * The description of the meta
 */
  description?: StringScalar;
  /**
 * The referenceId of the meta
 */
  referenceId?: StringScalar;
  /**
 * The referenceUrl of the meta
 */
  referenceUrl?: StringScalar;
  /**
 * The createdBy of the meta
 */
  createdBy?: StringScalar;
  /**
 * The createdAt of the meta
 */
  createdAt?: DateScalar;
  /**
 * The updatedBy of the meta
 */
  updatedBy?: StringScalar;
  /**
 * The updatedAt of the meta
 */
  updatedAt?: DateScalar;
  /**
 * The publishedBy of the meta
 */
  publishedBy?: StringScalar;
  /**
 * The publishedAt of the meta
 */
  publishedAt?: DateScalar;
  /**
 * The deletedBy of the meta
 */
  deletedBy?: StringScalar;
  /**
 * The deletedAt of the meta
 */
  deletedAt?: DateScalar;
};


/**
 * The server type
 */
export type Server = {
  /**
 * The id of the server
 */
  id?: StringScalar;
  /**
 * The name of the server
 */
  name?: StringScalar;
  /**
 * The type of the server
 */
  type?: ServerType;
};


/**
 * The pagination type
 */
export type Pagination = {
  /**
 * The page of the pagination
 */
  page: NumberScalar;
  /**
 * The pageSize of the pagination
 */
  pageSize: NumberScalar;
  /**
 * The total of the pagination
 */
  total: NumberScalar;
  /**
 * The totalPages of the pagination
 */
  totalPages: NumberScalar;
  /**
 * The hasNextPage of the pagination
 */
  hasNextPage: BooleanScalar;
  /**
 * The hasPreviousPage of the pagination
 */
  hasPreviousPage: BooleanScalar;
  /**
 * The nextPage of the pagination
 */
  nextPage: NumberScalar;
  /**
 * The previousPage of the pagination
 */
  previousPage: NumberScalar;
  /**
 * The firstPage of the pagination
 */
  firstPage: NumberScalar;
  /**
 * The lastPage of the pagination
 */
  lastPage: NumberScalar;
};


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

export type CmsMeta = {
};
// #endregion
