import { Component, Input } from '@angular/core';
import { AvatarGender } from '@central-factory/avatars/models/avatar';

@Component({
  selector: 'cf-avatar-gender',
  template: `
    <div cfBlock="avatar-gender" *ngIf="gender">
      <cf-typography [type]="size" [bold]="true">
        <ng-container *ngIf="showIcon">
          <cf-svg-icon
            cfElem="icon"
            [src]="'assets/icons/mdi/gender-' + gender.toLowerCase() + '.svg'"
          ></cf-svg-icon>
        </ng-container>

        <ng-container *ngIf="showLabel">
          {{ gender }}
        </ng-container>
      </cf-typography>
    </div>
  `,
})
export class AvatarGenderComponent {
  @Input() gender?: AvatarGender;
  @Input() size = 'h5';
  @Input() showIcon = true;
  @Input() showLabel = false;
}
