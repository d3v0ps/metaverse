import { Component, Input } from '@angular/core';
import { Era } from '@central-factory/worlds/__generated__/models';

@Component({
  selector: 'cf-era-title',
  template: `
    <div
      cfBlock="era-title"
      *ngIf="era"
      [cfMod]="{
        selected: selected
      }"
    >
      <span cfBlock="text">
        <cf-svg-icon
          cfElem="icon"
          *ngIf="era.icon"
          [src]="era.icon"
        ></cf-svg-icon>
        {{ era.name }} ({{ era.startYear }} - {{ era.endYear || 'now' }})
      </span>
      <p
        cfBlock="text"
        *ngIf="selected && era.description"
        style="margin-top: 0.5rem"
      >
        {{ era.description }}
      </p>
    </div>
  `,
})
export class EraTitleComponent {
  @Input() era?: Era;
  @Input() selected = false;
}
