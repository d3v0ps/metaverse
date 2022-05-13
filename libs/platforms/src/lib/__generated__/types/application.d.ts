import { Package } from './package';
import { TokensSchema } from './tokens-schema';
import { Workspace } from './workspace';

export { Package } from './package';
export { TokensSchema } from './tokens-schema';
export { Workspace } from './workspace';

export type Domain = {
  tokens?: TokensSchema[];
};

export type Application = {
  package?: Package;
  workspace?: Workspace;
  domains?: Domain[];
  readme?: string;
};

export type Root = Domain | Application;
