import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OnApplicationLoad } from '@central-factory/applications/models/application-interfaces';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import {
  Customization,
  Theme,
} from '@central-factory/preferences/models/customization';
import { AvailableThemesState } from '@central-factory/preferences/states/customization/available-themes.state';
import { CustomizationSettingsState } from '@central-factory/preferences/states/customization/customization-settings.state';
import { of, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

export type CustomizationForm = {
  theme: Theme;
};

@Component({
  selector: 'cf-customization',
  template: `
    <div>
      <h3>Customization</h3>

      <form [formGroup]="form">
        <h4>Appearance</h4>
        <table>
          <tr>
            <td>
              <label> Theme </label>
            </td>
            <td>
              <ng-select
                formControlName="theme"
                [items]="themes$ | async"
                bindLabel="name"
              >
                <ng-template ng-option-tmp let-item="item">
                  {{ item.name }}
                </ng-template>
              </ng-select>
            </td>
          </tr>
          <tr>
            <td>
              <label> Background </label>
            </td>
            <td>
              <ng-select
                formControlName="background"
                [items]="backgrounds$ | async"
                bindLabel="name"
              >
                <ng-template ng-option-tmp let-item="item">
                  {{ item.name }}
                </ng-template>
              </ng-select>
            </td>
          </tr>
        </table>

        <!-- h4>Sounds</h4>
        <table>
          <tr>
            <td>
              <label> Play Sounds </label>
            </td>
            <td>
              <input type="checkbox" formControlName="playSounds" />
            </td>
          </tr>
        </table -->
      </form>
    </div>
  `,
  styles: [
    `
      h3,
      h4 {
        margin-block-start: 0;
      }

      table {
        width: 100%;
        border-spacing: 0 1em;
        margin-bottom: 2em;
      }

      td {
        width: 200px;
      }

      ng-select {
        max-width: 400px;
      }
    `,
  ],
})
export class CustomizationScene
  implements OnInit, OnDestroy, OnApplicationLoad
{
  @Output() applicationLoad = new EventEmitter<void>();

  public readonly form = new FormGroup({
    theme: new FormControl(null),
    background: new FormControl(null),
  });

  public readonly themes$ = this.availableThemesState.themes$;
  public readonly backgrounds$ = of([
    {
      name: 'Code',
      url: '',
    },
    {
      name: 'Eternity',
      url: 'http://www.youtube.com/embed/ewcO1MNyRME',
    },
    {
      name: 'Apartment',
      url: 'http://www.youtube.com/embed/B6eL_N0N5KI',
    },
    {
      name: 'Apartment 2',
      url: 'http://www.youtube.com/embed/CMkI2EItvRw',
    },
    {
      name: 'Sleeping Quarters',
      url: 'https://www.youtube.com/embed/bjQUCecur3w',
    },
    {
      name: 'Bag End',
      url: 'http://www.youtube.com/embed/3DTvk8boR8U',
    },
    {
      name: 'Inn',
      url: 'http://www.youtube.com/embed/Wr067srQKUg',
    },
    {
      name: 'Inn II',
      url: 'http://www.youtube.com/embed/vyg5jJrZ42s',
    },
    {
      name: 'Morning Rain and Thunder at Castle',
      url: 'http://www.youtube.com/embed/eVCR3X6OfSc',
    },
    {
      name: 'Magic Castle',
      url: 'http://www.youtube.com/embed/jATVgJ_grys',
    },
    {
      name: 'Elven Havens',
      url: 'http://www.youtube.com/embed/5RlXStnMirE',
    },
    {
      name: 'Japan',
      url: 'http://www.youtube.com/embed/hR3sK0_nNGA',
    },
    {
      name: 'Dunes',
      url: 'http://www.youtube.com/embed/hShxsAlJmfw',
    },
    {
      name: 'Gothic City',
      url: 'http://www.youtube.com/embed/xrOXhZjyxfY',
    },
    {
      name: 'Cyberpunk City',
      url: 'http://www.youtube.com/embed/zkzdY572ZHk',
    },
    {
      name: 'Cyberpunk City II',
      url: 'http://www.youtube.com/embed/ouzhVyQv5ws',
    },
    {
      name: 'Space City',
      url: 'http://www.youtube.com/embed/z6DV5l0NWZ4',
    },
    {
      name: 'Factory Sounds',
      url: 'https://www.youtube.com/embed/bDZVYI_hIEs',
    },
  ]);

  private destroy$ = new Subject<void>();

  constructor(
    private readonly availableThemesState: AvailableThemesState,
    private readonly customizationSettingsState: CustomizationSettingsState,
    private readonly selectedAvatarState: SelectedAvatarState
  ) {}

  ngOnInit(): void {
    this.customizationSettingsState.customizationSettings$
      .pipe(
        filter((customizationSettings) => !!customizationSettings),
        tap((settings) =>
          this.form.patchValue(settings as Customization, { emitEvent: false })
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap((settings) =>
          this.customizationSettingsState
            .setCustomizationSettings(
              settings,
              this.selectedAvatarState.avatar$.getValue()?.id
            )
            .subscribe()
        )
      )
      .subscribe();
    this.applicationLoad.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
