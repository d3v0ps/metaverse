import { Physics } from '../../../../physics';
import { Space } from './space';

/** A Machine such as a washing machine, computers, and any kind of digital machine */
export interface Machine extends Physics {
  /** The state of the machine */
  state: string;
  /** The machine functions */
  functions: MachineFunction[];
  space?: Space;
}

/** The machine function kind */
export type MachineFunctionKind = 'command' | 'query';

/** A function a machine can perform */
export interface MachineFunction {
  /** The key of the function in the machine inner registry */
  key: string;
  /** The name of the function */
  name: string;
  /** The description of the function */
  description: string;
  /** The kind of the function */
  kind: MachineFunctionKind;
  /** The possible parameters of the function */
  parameterDefinitions?: MachineFunctionParameterDefinition[];
}

/** The type of a machine function parameter */
export type MachineFunctionParameterType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'object'
  | 'array';

/** A machine function parameter definition */
export interface MachineFunctionParameterDefinition {
  /** The key of the parameter in the function */
  key: string;
  /** The name of the parameter */
  name?: string;
  /** The description of the parameter */
  description?: string;
  /** The type of the parameter */
  type: MachineFunctionParameterType;
}
