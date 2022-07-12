/** Queries */

export type FindAllPayload<T = unknown> = {
  where?: Partial<T>;
};
export type FoundAllMessage<T = unknown> = {
  items: T[];
};

export type FindOnePayload<T = unknown> = {
  where: Partial<T>;
};
export type FoundOneMessage<T = unknown> = {
  item: T;
};

/** Commands */

export type CreatePayload<T = unknown> = {
  data: T;
};
export type CreatedMessage<T = unknown> = {
  id: string;
  item: T;
};

export type UpdatePayload<T = unknown> = {
  id: string;
  data: T;
};
export type UpdatedMessage<T = unknown> = {
  id: string;
  item: T;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type DeletePayload<T = unknown> = {
  id: string;
};
export type DeletedMessage<T = unknown> = {
  id: string;
  item?: T;
};
