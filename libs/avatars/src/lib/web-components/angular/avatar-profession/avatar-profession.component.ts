import { Component, Input } from '@angular/core';
import { AvatarProfession } from '@central-factory/worlds/models/world';

@Component({
  selector: 'cf-avatar-profession',
  template: `
    <div cfBlock="avatar-profession" *ngIf="profession">
      <cf-typography
        [type]="size"
        [bold]="true"
        [ngStyle]="{
          color: profession.color
        }"
      >
        <ng-container *ngIf="showIcon">
          <cf-svg-icon
            *ngIf="profession.icon"
            [src]="profession.icon"
            [ngStyle]="{
              color: profession.color
            }"
          ></cf-svg-icon>
        </ng-container>

        <ng-container *ngIf="showLabel">
          {{ profession.label }}
        </ng-container>
      </cf-typography>
    </div>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class AvatarProfessionComponent {
  @Input() profession?: AvatarProfession;
  @Input() size = 'h5';
  @Input() showIcon = true;
  @Input() showLabel = false;
}
