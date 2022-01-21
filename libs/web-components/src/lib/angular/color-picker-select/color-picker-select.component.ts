import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-color-picker-select',
  template: `
    <div cfBlock="color-picker-select">
      <cf-popover-content #colorPopover [closeOnClickOutside]="true">
        <div cfElem="content">
          <div
            *ngFor="let option of options"
            cfBlock="color-picker-select-option"
            [cfMod]="{
              active: option.value === value
            }"
            [style.backgroundColor]="option.value"
            (click)="value = option.value; colorPopover.hide()"
          ></div>
        </div>
      </cf-popover-content>

      <button
        cfBlock="button"
        [cfPopover]="colorPopover"
        [popoverOnHover]="false"
      >
        <cf-svg-icon *ngIf="icon" [src]="icon" cfElem="icon"></cf-svg-icon>
        <div
          *ngIf="value"
          cfBlock="color-picker-select-value"
          [style.backgroundColor]="value"
        ></div>
        <ng-container *ngIf="!value && placeholder">{{
          placeholder
        }}</ng-container>
      </button>
    </div>
  `,
})
export class ColorPickerSelectComponent {
  @Input() options: {
    label: string;
    value: string;
  }[] = [];

  @Input() icon = 'assets/icons/mdi/palette.svg';
  @Input() placeholder?: string;

  value?: string;
}
