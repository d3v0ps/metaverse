import { Package } from './package';
import { TokensSchema } from './tokens-schema';
import { Workspace, WorkspaceProject } from './workspace';

export { Package } from './package';
export { TokensSchema } from './tokens-schema';
export { Workspace, WorkspaceProject } from './workspace';

export type Root = Package | TokensSchema | Workspace | WorkspaceProject;
