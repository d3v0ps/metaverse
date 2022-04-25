import { Component, EventEmitter, Output } from '@angular/core';
import { OnApplicationLoad } from '@central-factory/applications/models/application-interfaces';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';

@Component({
  selector: 'cf-burg-scene',
  template: `
    <div
      cfBlock="burg-scene"
      *ngIf="{
        world: world$ | async,
        burg: burg$ | async
      } as data"
    >
      <cf-burg-map
        *ngIf="data.world && data.burg"
        [world]="data.world"
        [burg]="data.burg"
        (mapLoad)="applicationLoad.emit()"
      ></cf-burg-map>
    </div>
  `,
  styles: [
    `
      .burg-scene {
        height: 100%;
      }
    `,
  ],
})
export class BurgScene implements OnApplicationLoad {
  world$ = this.worldsState.selectedWorld$;
  burg$ = this.worldsState.selectedBurg$;

  @Output() applicationLoad = new EventEmitter<void>();

  constructor(private worldsState: WorldsState) {}
}
