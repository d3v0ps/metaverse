




export type Displayable = {
  component?: string;
  content: string;
}


export type Indexable = {
  id?: string;
  meta?: Meta;
}


export type Loadable = {
  src?: string;
}


export type Meta = {
  cover?: string;
  description?: string;
  subtitle?: string;
  title?: string;
}


export type Root = Displayable | Indexable | Loadable | Meta;
