import { Component } from '@angular/core';
import { World } from '@central-factory/worlds/models/world';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';

@Component({
  selector: 'cf-world-selector',
  template: `
    <div cfBlock="world-selector">
      <ng-select
        cfBlock="select"
        cfMod="xs"
        [items]="worlds$ | async"
        [ngModel]="selectedWorld$ | async"
        (ngModelChange)="onWorldSelect($event)"
      >
        <ng-template ng-label-tmp let-item="item" let-clear="clear">
          World: {{ item.meta.name }}
        </ng-template>
        <ng-template ng-option-tmp let-item="item">
          World: {{ item.meta.name }}
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
export class WorldSelectorComponent {
  selectedWorld$ = this.worldsState.selectedWorld$;
  worlds$ = this.worldsState.worlds$;

  constructor(private worldsState: WorldsState) {}

  onWorldSelect(world: World) {
    this.worldsState.selectWorld(world);
  }
}
