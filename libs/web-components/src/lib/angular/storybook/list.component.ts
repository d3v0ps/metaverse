import { Component } from '@angular/core';

@Component({
  selector: 'cf-list-component',
  template: `
    <ng-container *ngFor="let profession of professions">
      <cf-avatar-profession
        [profession]="profession"
        [showIcon]="showIcon"
        [showLabel]="showLabel"
      >
      </cf-avatar-profession>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    `,
  ],
})
class ListComponent {}
