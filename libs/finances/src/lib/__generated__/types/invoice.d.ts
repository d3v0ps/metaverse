



export enum InvoiceState {
  Draft = 'draft',
  Sent = 'sent',
  Paid = 'paid',
}



export type Invoice = {
  id: string;
  state?: InvoiceState;
  sender?: string;
  receiver?: string;
  createdAt?: string;
  updatedAt?: string;
  items?: InvoiceItem[];
  total?: string;
  paidAt?: string;
}


export type InvoiceItem = {
  id?: string;
  productId?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  createdAt?: Date;
  updatedAt?: Date;
}


export type Root = Invoice | InvoiceItem;
