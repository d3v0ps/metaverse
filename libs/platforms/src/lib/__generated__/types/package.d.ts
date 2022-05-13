



export type Package = {
  name: string;
  version?: string;
  license?: string;
  author?: Author;
  description?: string;
  scripts?: {
    [key: string]: string;
  }
  private?: boolean;
  dependencies?: {
    [key: string]: string;
  }
  devDependencies?: {
    [key: string]: string;
  }
  readme?: string;
};

export type Author = {
  name?: string;
};

export type Root = Package | Author;
