import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'cf-tab',
  template: `
    <div
      *ngIf="renderWhenHidden || active"
      cfBlock="tab-content"
      [cfMod]="{
        active: active
      }"
      [ngClass]="customClass"
    >
      <div *ngIf="bypassDOM && template">
        <ng-container [ngTemplateOutlet]="template"></ng-container>
      </div>
      <div *ngIf="!bypassDOM">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class TabComponent {
  @Input() title = '';
  @Input() icon?: string;
  @Input() active = false;
  @Input() disabled = false;
  @Input() bypassDOM = false;
  @Input() customClass = '';
  @Input() renderWhenHidden = true;
  @ContentChild(TemplateRef) template?: TemplateRef<any>;
}
