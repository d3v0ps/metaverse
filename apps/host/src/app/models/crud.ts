export type CreatePayload<T = any> = {
  data: T;
};
export type CreatedMessage<T = any> = {
  id: string;
  item: T;
};
export type UpdatePayload<T = any> = {
  id: string;
  data: T;
};
export type UpdatedMessage<T = any> = {
  id: string;
  item: T;
};
export type DeletePayload<T = any> = {
  id: string;
};
export type DeletedMessage<T = any> = {
  id: string;
  item: T;
};
export type FindAllPayload<T = any> = {
  where?: Partial<T>;
};
export type FoundAllMessage<T = any> = {
  items: T[];
};
export type FindOnePayload<T = any> = {
  where: Partial<T>;
};
export type FoundOneMessage<T = any> = {
  item: T;
};
