import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cf-list-item',
  template: `
    <li cfBlock="list-item" *ngIf="templateRef">
      <ng-template
        *ngIf="templateRef; else id"
        [ngTemplateOutlet]="templateRef"
        [ngTemplateOutletContext]="{ $implicit: item }"
      ></ng-template>
      <ng-template #id>{{ item?.id }}</ng-template>
    </li>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class ListItemComponent<T extends { id: string }> {
  @Input() item?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() templateRef?: TemplateRef<any>;

  get itemContext(): any {
    return { $implicit: this.item };
  }
}
