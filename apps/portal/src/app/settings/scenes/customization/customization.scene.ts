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
import { filter, map, takeUntil, tap } from 'rxjs/operators';

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
          <tr *ngIf="form.controls.background.value.name === 'Custom'">
            <td>
              <label> Custom Background </label>
            </td>
            <td>
              <input formControlName="customBackground" />
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
    customBackground: new FormControl(null),
  });

  public readonly themes$ = this.availableThemesState.themes$;
  public readonly backgrounds$ = of([
    {
      name: 'Custom',
      url: '',
    },
    {
      name: 'Code',
      url: '',
    },
    {
      name: 'Singularity',
      url: 'http://www.youtube.com/embed/pfW3JhCUOD8',
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
      name: 'Royal Library',
      url: 'http://www.youtube.com/embed/CHFif_y2TyM',
    },
    {
      name: 'Japan',
      url: 'http://www.youtube.com/embed/hR3sK0_nNGA',
    },
    {
      name: 'Paris Apartment',
      url: 'http://www.youtube.com/embed/Dvu_2lzfd2I',
    },
    {
      name: 'NYC Apartment',
      url: 'http://www.youtube.com/embed/sVl9A21zCYk',
    },
    {
      name: 'Hong Kong Apartment',
      url: 'http://www.youtube.com/embed/sJ8ZoJNE4cU',
    },
    {
      name: 'Tokio Apartment',
      url: 'http://www.youtube.com/embed/hBGbt2CRDpA',
    },
    {
      name: 'Toronto Window',
      url: 'http://www.youtube.com/embed/bLAzpxidPN0',
    },
    {
      name: 'Cozy Treehouse',
      url: 'http://www.youtube.com/embed/xRItTqAU800',
    },
    {
      name: 'Cozy Cabin',
      url: 'http://www.youtube.com/embed/-mirqViyITY',
    },
    {
      name: 'Cozy Cabin II',
      url: 'http://www.youtube.com/embed/gKnG2WKtvgc',
    },
    {
      name: 'Cozy Cabin III',
      url: 'http://www.youtube.com/embed/yx4xb3rp750',
    },
    {
      name: 'Beach House',
      url: 'http://www.youtube.com/embed/5zkP39BtGBY',
    },
    {
      name: 'Beach House II',
      url: 'http://www.youtube.com/embed/DjlCNRSC07A',
    },
    {
      name: 'Tropical Sunset',
      url: 'http://www.youtube.com/embed/d7uCjM9vWlw',
    },
    {
      name: 'Spring Coffee Shop',
      url: 'http://www.youtube.com/embed/uby4pigzp6Q',
    },
    {
      name: 'Victorian London',
      url: 'http://www.youtube.com/embed/8q7o-Bg2gRA',
    },
    {
      name: 'Anime Window',
      url: 'http://www.youtube.com/embed/pl2-zgZBo5Y',
    },
    {
      name: 'Dunes',
      url: 'http://www.youtube.com/embed/hShxsAlJmfw',
    },
    {
      name: 'Dark Planet',
      url: 'http://www.youtube.com/embed/yCJHo-HC2d8',
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
      name: 'Cyberpunk City III',
      url: 'http://www.youtube.com/embed/W5KJsQMKbwM',
    },
    {
      name: 'Cyberpunk City IV',
      url: 'http://www.youtube.com/embed/0FyEM4g4eR0',
    },
    {
      name: 'Matrix City',
      url: 'http://www.youtube.com/embed/Wnagw1bEhBY',
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
        filter<Customization>(
          (customizationSettings) => !!customizationSettings
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ) as any,
        map(({ theme, background }) => ({
          theme,
          background,
          customBackground:
            background.name === 'Custom' ? background.url : null,
        })),
        tap((settings) =>
          this.form.patchValue(settings as Customization, { emitEvent: false })
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        filter(
          (customization) =>
            customization.background.name !== 'Custom' ||
            customization.customBackground
        ),
        map(({ theme, background, customBackground }) => ({
          theme,
          background:
            background?.name === 'Custom'
              ? {
                  name: 'Custom',
                  url: customBackground,
                }
              : background,
        })),
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
