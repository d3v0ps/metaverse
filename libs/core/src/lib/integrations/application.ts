export interface Application {
  id: string;
  version: string;
  name: string;
  description: string;
  icon: string;
  website: string;
  src: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  url: string;
}
