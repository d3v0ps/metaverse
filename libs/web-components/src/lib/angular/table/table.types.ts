import { TypeToken } from '@central-factory/platforms/__generated__/models';

export enum PaginationType {
  ClientSide = 'client-side',
  ServerSide = 'server-side',
}

export enum PaginationDisplayType {
  SinglePage = 'single-page',
  MultiplePages = 'multiple-pages',
}

export type TableColumn = {
  name: string;
  label: string;
  visible: boolean;
  type: string;
  typeToken?: TypeToken;
};

export type TablePagination = {
  enabled: boolean;
  type?: PaginationType;
  displayType?: PaginationDisplayType;
};

export type TableConfig = {
  columns: TableColumn[];
  showHeaders: boolean;
  pagination: TablePagination;
};
