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


import { Thing } from './thing';

import { Meta } from './meta';

// #endregion

// #region Enumerations
/**
 * ============
 * Enumerations
 * ============
 */

// #endregion

// #region Primitive Scalars
/**
 * =================
 * Primitive Scalars
 * =================
 */

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
export class Document{
  @Field((type) => Meta)
  meta?: Meta;
  @Field((type) => Thing)
  content?: Thing;
}
// #endregion

// #region Type Roots
/**
 * ============
 * Type Roots
 * ============
 */

@ObjectType()
export class CmsIndex {
  @Field((type) => [Document])
  Documents!: Document[];
}
// #endregion
