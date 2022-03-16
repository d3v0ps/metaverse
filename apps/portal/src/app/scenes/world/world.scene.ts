import { Component } from '@angular/core';
import { AvatarGenerator } from '@central-factory/avatars/data/generators/avatar.generator';
import { AvatarRelationshipKind } from '@central-factory/avatars/models';
import { Avatar } from '@central-factory/avatars/models/avatar';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';

@Component({
  selector: 'cf-world-scene',
  template: `
    <div cfBlock="scene" cfMod="world" *ngIf="world$ | async as world">
      <cf-avatars-list
        [avatars]="avatars"
        [world]="world"
        (selectAvatar)="selectedAvatar = $event"
      ></cf-avatars-list>
      <!-- cf-world-map *ngIf="!selectedAvatar"></cf-world-map -->
      <cf-avatar-info
        [avatar]="selectedAvatar"
        [world]="world"
      ></cf-avatar-info>
    </div>
  `,
  styles: [
    `
      .scene {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        overflow: auto;
        gap: 1rem;
        /* flex-direction: row;
        height: 100%;
        justify-content: space-around; */

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

        /* cf-world-map,
        cf-avatar-info {
          width: 100%;
        } */
      }
    `,
  ],
})
export class WorldScene {
  avatars: Avatar[] = [];
  paginated: Avatar[] = [];
  selectedAvatar?: Avatar;

  world$ = this.worldsState.selectedWorldContent$;

  selectedHouse?: string;

  constructor(
    private generator: AvatarGenerator,
    private worldsState: WorldsState
  ) {}

  ngOnInit() {
    this.worldsState.selectedWorldContent$.subscribe((world) => {
      if (
        !world ||
        !world.map?.cells ||
        !world.map?.cells.burgs ||
        !world.map?.cells.burgs[0]
      ) {
        return;
      }

      const burg = world.map?.cells.burgs[1];

      const burgAvatars = this.generator.generateBurg(world, burg);

      const avatars = this.generator
        .generateDemigods(world)
        .concat(burgAvatars);

      // console.debug('demigods', avatars[0]);

      const arrayToTree = (arr: Avatar[], parent = '0'): Avatar[] =>
        arr
          .filter((item) =>
            item.relationships?.some(
              (relationship) =>
                relationship.kind === AvatarRelationshipKind.Parent &&
                relationship.avatar === parent
            )
          )
          .map((child) => ({
            ...child,
            children: arrayToTree(arr, child.id),
          }));

      const root = arrayToTree(avatars);

      this.avatars = avatars;
      this.paginated = avatars.slice(0, 10);
      this.selectedAvatar = this.avatars[0];
    });
  }
}
