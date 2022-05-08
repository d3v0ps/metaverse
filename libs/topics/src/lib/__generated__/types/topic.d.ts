



export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}



export type Trigger = {
  name?: string;
  rules?: any;
}


export type Topic = {
  id: string;
  priority: Priority;
  title: string;
  description?: string;
  icon?: string;
  themeColor?: string;
  background?: string;
  applications?: string[];
  categories?: string[];
  shortcuts?: string[];
  triggers?: Trigger[];
  media?: any;
  createdAt?: string;
  updatedAt?: string;
}


export type Root = Trigger | Topic;
