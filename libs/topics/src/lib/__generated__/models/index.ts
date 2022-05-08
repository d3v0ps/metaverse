/* eslint-disable @typescript-eslint/no-explicit-any */

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}


export type Topic = {
  applications?: string[];

  background?: string;

  categories?: string[];

  createdAt?: string;

  description?: string;

  icon?: string;

  id: string;

  media?: any;

  priority: Priority;

  shortcuts?: string[];

  themeColor?: string;

  title: string;

  triggers?: Trigger[];

  updatedAt?: string;
  _attachments?: any;
}

export type Trigger = {
  name?: string;

  rules?: any;
  _attachments?: any;
}

