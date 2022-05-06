import { Component, EventEmitter, Input, Output } from '@angular/core';
import { World } from '@central-factory/worlds/models/world';
import { worldStates } from '@central-factory/worlds/state-machines/world';
import { BehaviorSubject } from 'rxjs';
import { createMachine, interpret, State } from 'xstate';

@Component({
  selector: 'cf-world-card',
  template: `
    <div cfBlock="world-card" *ngIf="world">
      <div cfElem="header">
        <!-- h3 cfBlock="heading">#{{ world.id }}</h3 -->
      </div>

      <div cfElem="body" *ngIf="worldState$ | async as state">
        <div cfElem="name">
          <h4 cfBlock="heading">{{ world.displayName }}</h4>
          <p>Current Year: {{ world.year }}</p>
          <p>Era: {{ world.map?.settings?.options?.era }}</p>
          <h5 cfBlock="heading">Eras</h5>

          <label
            class="radio-control"
            *ngFor="let era of world.eras"
            (click)="
              world.map?.settings?.options?.era
                ? (world.map!.settings.options.era = era.name)
                : null
            "
          >
            <input
              type="radio"
              name="era-{{ world.id }}"
              [value]="era.name"
              [checked]="era.name === world.map?.settings?.options?.era"
            />
            <cf-era-title
              [era]="era"
              [selected]="era.name === world.map?.settings?.options?.era"
            ></cf-era-title>
          </label>
        </div>
        <div cfElem="preview">
          <div
            *ngIf="world.meta.previewUrl"
            cfBlock="preview-image"
            [ngStyle]="{
              backgroundImage: 'url(' + world.meta.previewUrl + ')'
            }"
          ></div>
        </div>
      </div>

      <div cfElem="footer" *ngIf="worldState$ | async as state">
        <div cfBlock="form-buttons">
          <button
            cfBlock="button"
            cfMod="primary has-icon"
            type="button"
            [disabled]="world.kind === 'analog'"
            (click)="showCulturesClick.emit(world)"
          >
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/mdi/account-group.svg"
            ></cf-svg-icon>
            {{
              world.stats?.cultures || world.map?.cells?.cultures?.length || 0
            }}
            Cultures
          </button>
          <button
            cfBlock="button"
            cfMod="primary has-icon"
            type="button"
            [disabled]="world.kind === 'analog'"
            (click)="showStatesClick.emit(world)"
          >
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/mdi/flag.svg"
            ></cf-svg-icon>
            {{ world.stats?.states || world.map?.cells?.states?.length || 0 }}
            States
          </button>
          <button
            cfBlock="button"
            cfMod="primary has-icon"
            type="button"
            [disabled]="world.kind === 'analog'"
            (click)="showBurgsClick.emit(world)"
          >
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/mdi/city.svg"
            ></cf-svg-icon>
            {{ world.stats?.burgs || world.map?.cells?.burgs?.length || 0 }}
            Burgs
          </button>
          <button
            cfBlock="button"
            cfMod="primary has-icon"
            type="button"
            [disabled]="world.kind === 'analog'"
            *ngIf="(world.stats?.avatars || world.avatars?.length || 0) > 0"
            (click)="showAvatarsClick.emit(world)"
          >
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/mdi/account.svg"
            ></cf-svg-icon>
            {{ world.stats?.avatars || world.avatars?.length || 0 }}
            <strong
              class="primary"
              *ngIf="world.archetypes && world.archetypes.length > 0"
              >({{ world.archetypes.length }})</strong
            >
            Avatars
          </button>
          <button
            cfBlock="button"
            cfMod="primary has-icon"
            type="button"
            *ngIf="world.kind !== 'analog'"
            (click)="generateClick.emit(world)"
            [disabled]="state.matches('genesis.populating')"
          >
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/mdi/account-sync.svg"
            ></cf-svg-icon>
            {{
              state.matches('genesis.populating')
                ? 'Generating... ' + avatarGenerationPercentage + '%'
                : 'Generate Avatars'
            }}
          </button>
          <button
            cfBlock="button"
            cfMod="primary has-icon"
            type="button"
            [disabled]="true && !state.matches('genesis.demographical')"
            (click)="playClick.emit(world)"
          >
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/mdi/play.svg"
            ></cf-svg-icon>
            Play
          </button>
        </div>
        <!--  div cfElem="source">
          <cf-code [content]="world | json"> </cf-code>
        </div -->
      </div>
    </div>
  `,
  styles: [
    `
      .world-card {
        display: flex;
        flex-direction: column;
        box-shadow: var(--component-scene-content-shadow-outset),
          inset var(--component-scene-content-shadow-inset-primary),
          inset var(--component-scene-content-shadow-inset-secondary);
        border-radius: 20px;
        background: var(--color-base-dark-medium);

        &__header {
        }
        &__footer {
          padding: 0 1rem;
        }

        &__source {
          height: 100px;
        }
      }

      .world-card__body {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        padding: 1rem;

        & > *:nth-child(1) {
          flex: 1 1 70%;
          min-width: 30ch;
        }

        & > *:nth-child(2) {
          flex: 1 1 25%;
          min-width: 15ch;
        }
      }

      .world-card__footer {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class WorldCardComponent {
  @Input() set world(value: World | undefined) {
    const stateHasChanged =
      JSON.stringify(value?.state) !== JSON.stringify(this._world?.state);
    this._world = value;

    if (!stateHasChanged) {
      return;
    }

    this.interpreter.stop();
    this.interpreter = interpret(this.machine).onTransition((state) => {
      this.worldState$.next(state as unknown as State<any>);
    });

    this.interpreter.start(value?.state);
  }
  get world(): World | undefined {
    return this._world;
  }

  get avatarGenerationPercentage(): number {
    return Math.floor(((this.world?.avatars?.length || 0) * 100) / 42000);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  worldState$ = new BehaviorSubject<State<any> | undefined>(undefined);

  @Output() showCulturesClick = new EventEmitter<World>();
  @Output() showStatesClick = new EventEmitter<World>();
  @Output() showBurgsClick = new EventEmitter<World>();
  @Output() showAvatarsClick = new EventEmitter<World>();
  @Output() generateClick = new EventEmitter<World>();
  @Output() playClick = new EventEmitter<World>();

  private machine = createMachine({
    ...(worldStates as any),
  });

  private interpreter = interpret(this.machine).onTransition((state) =>
    this.worldState$.next(state as unknown as State<any>)
  );

  private _world?: World;
}
