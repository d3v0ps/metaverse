import { TokensSchema } from './tokens-schema';
import { WorkspaceProject } from './workspace';

export { TokensSchema } from './tokens-schema';
export { WorkspaceProject } from './workspace';

export type Package = {
  name: string;
  models: TokensSchema[];
  project: WorkspaceProject;
  readme?: string;
};

export type Root = Package;
