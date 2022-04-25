import { Media } from '@central-factory/web-components/angular/media/media.component';

export type TopicTrigger = {
  name?: string;
  rules?: any;
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
