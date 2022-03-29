import { Component } from '@angular/core';
import { World } from '@central-factory/worlds/models/world';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';

@Component({
  selector: 'cf-worlds-manager',
  template: `
    <div
      cfBlock="worlds-manager"
      *ngIf="{
        worlds: worlds$ | async,
        selectedWorld: selectedWorld$ | async
      } as data"
    >
      <cf-worlds-list
        *ngIf="data.worlds"
        [worlds]="data.worlds"
        [selectedWorld]="data.selectedWorld || undefined"
        (generateClick)="onRegenerateClick($event)"
        (worldSelect)="onWorldSelect($event)"
      >
      </cf-worlds-list>
      <cf-world-card
        [world]="data.selectedWorld || undefined"
        (generateClick)="onRegenerateClick($event)"
      ></cf-world-card>
    </div>
  `,
  styles: [
    `
      .worlds-manager {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        overflow: auto;
        gap: 1rem;

        > * {
          height: 100%;
        }

        > *:nth-child(1) {
          flex: 1 1 25%;
          min-width: 15ch;
        }

        > *:nth-child(2) {
          flex: 1 1 70%;
          min-width: 30ch;
        }
      }
    `,
  ],
})
export class WorldsManagerComponent {
  worlds$ = this.worldsState.worlds$;
  selectedWorld$ = this.worldsState.selectedWorld$;

  constructor(private worldsState: WorldsState) {}

  onRegenerateClick(world: World) {
    console.debug('onRegenerate');
    this.worldsState.generateAvatars(world);
  }

  onWorldSelect(world: World) {
    this.worldsState.selectWorld(world);
  }
}
