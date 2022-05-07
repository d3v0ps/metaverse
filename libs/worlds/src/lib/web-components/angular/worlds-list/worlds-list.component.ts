import { Component, EventEmitter, Input, Output } from '@angular/core';
import { World } from '@central-factory/worlds/__generated__/models';

@Component({
  selector: 'cf-worlds-list',
  template: `
    <div cfBlock="worlds-list">
      <ng-container *ngFor="let world of worlds">
        <cf-worlds-list-item
          [world]="world"
          (generateClick)="generateClick.emit($event)"
          (click)="onListItemClick(world)"
        >
        </cf-worlds-list-item>
      </ng-container>
    </div>
  `,
})
export class WorldsListComponent {
  @Input() worlds: World[] = [];
  @Input() selectedWorld?: World;

  @Output() generateClick = new EventEmitter<World>();
  @Output() worldSelect = new EventEmitter<World>();

  onListItemClick(world: World) {
    this.selectedWorld = world;
    this.worldSelect.emit(world);
  }
}
