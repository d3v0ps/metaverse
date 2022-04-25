export type Preference<TValue = string> = {
  id: string;
  key: string;
  value: TValue;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
};
