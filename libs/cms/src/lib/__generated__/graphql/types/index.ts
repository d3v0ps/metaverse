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

// #region Types
/**
 * ==============
 * Types
 * ==============
 */

@ObjectType({
  description: `The document type`
})
/**
 * The document type
 */
export class Document {
  @Field((type) => Meta)
  /**
 * The meta of the document
 */
  meta?: Meta;
  @Field((type) => Thing)
  /**
 * The content of the document
 */
  content?: Thing;
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

export enum CmsIndexTypes {
  Document = 'Document',
}
registerEnumType(CmsIndexTypes, {
  name: 'CmsIndexTypes',
  description: `CmsIndex Types Enum`,
});

@ObjectType()
export class CmsIndex {
  @Field((type) => [Document])
  Documents!: Document[];
}
// #endregion
