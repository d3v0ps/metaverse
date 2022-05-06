import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-avatar-appearance-preview',
  template: `
    <ng-container *ngIf="appearance">
      <ng-container [ngSwitch]="appearance.format">
        <ng-container *ngSwitchCase="appearanceFormats.Model">
          <cf-avatar-appearance-preview-model-viewer
            [appearance]="appearance"
            [width]="width"
            [height]="height"
          >
          </cf-avatar-appearance-preview-model-viewer>
        </ng-container>

        <ng-container *ngSwitchDefault>
          <cf-avatar-appearance-preview-image
            [appearance]="appearance"
          ></cf-avatar-appearance-preview-image>
        </ng-container>
      </ng-container>
    </ng-container>
  `,
})
export class AvatarAppearancePreviewComponent {
  @Input() appearance?: any;

  @Input() height = '300px';
  @Input() width = '100%';

  appearanceFormats = { Model: '' };
}
