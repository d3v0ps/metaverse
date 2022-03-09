export type DesignStylePropertyOption = {
  id: string;
  label: string;
  value?: string;
  [key: string]: any;
};

export type DesignStyleProperty = {
  id: string;
  label: string;
  defaultValue?: any;
  type: 'select' | 'color' | 'file' | 'number' | 'text' | 'group';
  options?: DesignStylePropertyOption[];
};

export type DesignStyle = {
  id: string;
  name: string;
  url?: string;
  description?: string;
  properties: DesignStyleProperty[];
  hasViewer?: boolean;
  license: {
    type: string;
    url?: string;
  }
};
