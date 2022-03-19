import { Component } from '@angular/core';
import { PlannerGoal } from '@central-factory/actors/models/planner-goal';
import { ActionPlanner } from '@central-factory/actors/services/action-planner';
import { actions as avatarActions } from '@central-factory/avatars/actions/avatar.actions';
import { AvatarGenerator } from '@central-factory/avatars/data/generators/avatar.generator';
import { goals as avatarGoals } from '@central-factory/avatars/goals/avatar.goals';
import { AvatarRelationshipKind } from '@central-factory/avatars/models';
import { Avatar } from '@central-factory/avatars/models/avatar';
import { AvatarLivingState } from '@central-factory/avatars/states/living-avatar.state';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';
import faker from '@faker-js/faker/locale/en_US';

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
    private worldsState: WorldsState,
    private actionPlanner: ActionPlanner<AvatarLivingState>
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

      this.avatars.forEach((avatar) => {
        const energy = faker.datatype.number({ min: 4, max: 40 });
        const { bestPlan, plans } = this.actionPlanner.execute(
          {
            energy,
            mind: faker.datatype.number({ min: 25, max: 100 }),
            location: {},
            goals: {
              food: {},
            },
          },
          [
            {
              actions: avatarActions,
              goal: avatarGoals.Food as PlannerGoal<AvatarLivingState>,
            },
          ]
        );

        console.debug('plans', { energy, plans });

        console.debug(
          `-- Best plan(${bestPlan?.cost}) for ${bestPlan?.goal.label} --`
        );
        bestPlan?.actions.map((a: any, i: number) =>
          console.debug(`${i + 1}) ${a}`)
        );
        console.debug('Other plans', plans);
      });
    });
  }
}
