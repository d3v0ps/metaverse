import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() title = '';
  @Input() icon?: string;
  @Input() disabled = false;
  @Input() bypassDOM = false;
  @Input() customClass = '';
  @Input() renderWhenHidden = true;
  @ContentChild(TemplateRef) template?: TemplateRef<unknown>;

  @Input() set active(value: boolean) {
    setTimeout(() => {
      this._active = value;
      this.cd.markForCheck();
    }, 100);
  }
  get active(): boolean {
    return this._active;
  }

  private _active = false;

  constructor(private cd: ChangeDetectorRef) {}
}
