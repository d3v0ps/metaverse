




export type Tax = {
  id: string;
  name: string;
  rate: number;
  financialEntityCode: string;
  createdAt: Date;
  updatedAt: Date;
  period: TaxPeriod;
}


export type TaxPeriod = {
  start: Date;
  end: Date;
  payStart: Date;
  payEnd: Date;
}


export type Root = Tax | TaxPeriod;
