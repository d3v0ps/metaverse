export type TopicTrigger = {
  name?: string;
  rules?: any;
};

export type Media = {
  type: 'image' | 'video' | 'audio' | 'text' | 'game';
  url: string;
  src?: string;
  title?: string;
  content?: string;
  cover?: string;
};

export type TopicPriority = 'low' | 'medium' | 'high';

export type Topic = {
  id: string;
  priority: TopicPriority;
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
