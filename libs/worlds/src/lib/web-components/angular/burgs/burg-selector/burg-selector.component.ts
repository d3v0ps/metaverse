import { Component } from '@angular/core';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';
import { Burg } from '@central-factory/worlds/__generated__/models';

@Component({
  selector: 'cf-burg-selector',
  template: `
    <div cfBlock="burg-selector">
      <ng-select
        cfBlock="select"
        cfMod="xs"
        bindLabel="name"
        [items]="burgs$ | async"
        [ngModel]="selectedBurg$ | async"
        (ngModelChange)="onBurgSelect($event)"
      >
        <ng-template ng-label-tmp let-item="item" let-clear="clear">
          Burg: {{ item.name }}
        </ng-template>
        <ng-template ng-option-tmp let-item="item">
          Burg: {{ item.name }}
        </ng-template>
      </ng-select>
    </div>
  `,
  styles: [
    `
      .select {
        min-width: 10rem;
      }
    `,
  ],
})
export class BurgSelectorComponent {
  selectedBurg$ = this.worldsState.selectedBurg$;
  burgs$ = this.worldsState.burgs$;
  worlds$ = this.worldsState.worlds$;

  constructor(private worldsState: WorldsState) {}

  onBurgSelect(burg: Burg) {
    this.worldsState.selectBurg(burg);
  }
}
