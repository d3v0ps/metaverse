export type TopicTrigger = {
  name?: string;
  rules?: any;
};

export type Media = {
  type: 'image' | 'video' | 'audio' | 'text';
  url: string;
  content?: string;
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
  media?: Media[];
  createdAt?: string;
  updatedAt?: string;
};
