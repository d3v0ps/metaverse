import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cf-table-row',
  template: `
    <tr cfBlock="table-row" *ngIf="templateRef">
      <ng-template
        *ngIf="templateRef; else id"
        [ngTemplateOutlet]="templateRef"
        [ngTemplateOutletContext]="{ $implicit: item }"
      ></ng-template>
      <ng-template #id>{{ item?.id }}</ng-template>
    </tr>
  `,
  encapsulation: ViewEncapsulation.None,
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class TableRowComponent<T extends { id: string }> {
  @Input() item?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() templateRef?: TemplateRef<any>;

  get itemContext(): any {
    return { $implicit: this.item };
  }
}
