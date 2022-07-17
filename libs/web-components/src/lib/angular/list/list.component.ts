import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'cf-list',
  template: `
    <ul cfBlock="cf-list">
      <cf-list-item
        *ngFor="let item of items"
        [item]="item"
        [templateRef]="itemTemplate"
      >
        <ng-content></ng-content>
      </cf-list-item>
    </ul>
  `,
})
export class ListComponent<T extends { id: string }> {
  @Input() items: T[] = [];

  @ContentChild(TemplateRef) public itemTemplate?: TemplateRef<any>;
}
