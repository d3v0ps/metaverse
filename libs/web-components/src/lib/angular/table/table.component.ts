/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { TableConfig } from './table.types';

@Component({
  selector: 'cf-table',
  template: `
    <table cfBlock="table">
      <thead cfElem="header">
        <cf-table-header-row
          *ngFor="let column of tableConfig.columns"
          [column]="column"
          [templateRef]="headerRowTemplate"
        ></cf-table-header-row>
      </thead>
      <tbody cfElem="body">
        <cf-table-row
          *ngFor="let item of items"
          [item]="item"
          [templateRef]="rowTemplate"
        ></cf-table-row>
      </tbody>
    </table>
  `,
})
export class TableComponent<T extends { id: string }> {
  @Input() items: T[] = [];
  @Input() set config(config: Partial<TableConfig>) {
    this.tableConfig = Object.assign({}, this.tableConfig, config);
  }

  @ContentChild('headerRow') public headerRowTemplate?: TemplateRef<any>;
  @ContentChild('row') public rowTemplate?: TemplateRef<any>;

  tableConfig: TableConfig = {
    showHeaders: true,
    columns: [],
    pagination: {
      enabled: false,
    },
  };
}
