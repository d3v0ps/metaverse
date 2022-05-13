import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { TableColumn } from './table.types';

@Component({
  selector: 'cf-table-header-row',
  template: `
    <tr cfBlock="table-header-row" *ngIf="templateRef">
      <ng-template
        *ngIf="templateRef; else name"
        [ngTemplateOutlet]="templateRef"
        [ngTemplateOutletContext]="{ $implicit: item }"
      ></ng-template>
      <ng-template #name>{{ column.name }}</ng-template>
    </tr>
  `,
  encapsulation: ViewEncapsulation.None,
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class TableHeaderRowComponent {
  @Input() column?: TableColumn;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() templateRef?: TemplateRef<any>;

  get itemContext(): any {
    return { $implicit: this.column };
  }
}
