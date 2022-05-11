



export type Workspace = {
  config?: WorkspaceConfig;
};

export type WorkspaceConfig = {
  version?: string;
  projects?: {
    [key: string]: WorkspaceProject;
  }
};

export type WorkspaceProject = {
  projectType?: string;
  root?: string;
  sourceRoot?: string;
  prefix?: string;
  architect?: any;
  tags?: string[];
};

export type Root = Workspace | WorkspaceConfig | WorkspaceProject;
