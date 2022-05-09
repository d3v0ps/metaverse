



export type Workspace = {
  [key: string]: WorkspaceProject;
};

export type WorkspaceProject = {
  root?: string;
};

export type Root = Workspace | WorkspaceProject;
