export type Preference<TValue = string> = {
  id: string;
  value: TValue;
  createdAt?: string;
  updatedAt?: string;
};
