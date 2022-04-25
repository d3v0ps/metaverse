import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-button',
  template: `
    <button
      cfBlock="button"
      [type]="type"
      [disabled]="disabled"
      [ngStyle]="style || null"
      [cfMod]="{
        active: active,
        'custom-background-color': style && style['background-color'],
        fab: fab,
        'full-width': fullWidth,
        'has-icon': icon,
        'only-icon': icon && !text,
        outline: outline,
        rounded: rounded,
        uppercase: uppercase,

        small: size === 'small',
        large: size === 'large',

        primary: theme === 'primary',
        secondary: theme === 'secondary',
        success: theme === 'success',
        warning: theme === 'warning',
        danger: theme === 'danger',
        info: theme === 'info',
        light: theme === 'light',
        dark: theme === 'dark'
      }"
    >
      <cf-svg-icon elem="icon" *ngIf="icon" [src]="icon"></cf-svg-icon>
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() icon?: string;
  @Input() theme?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() size?: 'small' | 'large';
  @Input() fab = false;
  @Input() fullWidth = false;
  @Input() disabled = false;
  @Input() active = false;
  @Input() outline = false;
  @Input() rounded = false;
  @Input() uppercase = false;
  @Input() style?: {
    [klass: string]: any;
  };
}
