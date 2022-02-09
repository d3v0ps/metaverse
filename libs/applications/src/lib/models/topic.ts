export type TopicTrigger = {
  name?: string;
  rules?: any;
};

export type Topic = {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  themeColor?: string;
  background?: string;
  applications?: string[];
  categories?: string[];
  shortcuts?: string[];
  triggers?: TopicTrigger[];
  createdAt?: string;
  updatedAt?: string;
};
