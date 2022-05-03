import { Component, Input } from '@angular/core';
import { Religion } from '@central-factory/worlds/models/fmg-map';

@Component({
  selector: 'cf-avatar-beliefs',
  template: `
    <div cfBlock="avatar-beliefs">
      <cf-typography type="h5" [bold]="true" *ngIf="showTitle">
        <cf-svg-icon src="assets/icons/mdi/cross.svg"></cf-svg-icon>
        Beliefs
      </cf-typography>

      <section>
        <cf-typography [type]="size" [bold]="true">
          <ng-container *ngFor="let belief of beliefs; let last = last">
            <ng-container *ngIf="showIcon">
              <cf-svg-icon
                *ngIf="false"
                [ngStyle]="{
                  color: belief.color
                }"
              ></cf-svg-icon>
            </ng-container>

            <ng-container *ngIf="showLabel">
              <span
                [ngStyle]="{
                  color: belief.color,
                  display: 'inline-flex'
                }"
                >{{ belief.name }}
              </span>
            </ng-container>

            <ng-container *ngIf="!last"> , </ng-container>
          </ng-container>
        </cf-typography>
      </section>
    </div>
  `,
})
export class AvatarBeliefsComponent {
  @Input() beliefs?: Religion[];
  @Input() size = 'h5';
  @Input() showTitle = true;
  @Input() showIcon = true;
  @Input() showLabel = true;
}
