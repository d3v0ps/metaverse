import { NgModule } from '@angular/core';
import { TableHeaderRowComponent } from './table-header-row.component';
import { TableRowComponent } from './table-row.component';

import { TableComponent } from './table.component';

@NgModule({
  imports: [],
  exports: [TableComponent, TableRowComponent, TableHeaderRowComponent],
  declarations: [TableComponent, TableRowComponent, TableHeaderRowComponent],
  providers: [],
})
export class TableModule {}
