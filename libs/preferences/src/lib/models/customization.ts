export type Theme = {
  name: string;
  path: string;
};

export type Customization = {
  theme: Theme;
  background?: {
    name: string;
    url: string;
  };
};
