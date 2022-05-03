import { Component, Input } from '@angular/core';
import { AvatarProfession } from '@central-factory/worlds/models/world';

@Component({
  selector: 'cf-avatar-professions',
  template: `
    <div cfBlock="avatar-professions">
      <cf-typography type="h5" [bold]="true" *ngIf="showTitle">
        <cf-svg-icon src="assets/icons/mdi/account-hard-hat.svg"></cf-svg-icon>
        Professions
      </cf-typography>

      <section>
        <cf-typography [type]="size" [bold]="true">
          <ng-container *ngFor="let profession of professions; let last = last">
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
              <span
                [ngStyle]="{
                  color: profession.color,
                  display: 'inline-flex'
                }"
                >{{ profession.label }}
              </span>
            </ng-container>

            <ng-container *ngIf="!last"> , </ng-container>
          </ng-container>
        </cf-typography>
      </section>
    </div>
  `,
})
export class AvatarProfessionsComponent {
  @Input() professions?: AvatarProfession[];
  @Input() size = 'h5';
  @Input() showTitle = true;
  @Input() showIcon = true;
  @Input() showLabel = false;
}
