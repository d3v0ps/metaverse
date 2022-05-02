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
import { backgrounds } from '@central-factory/preferences/data/base/customization/customization.data';
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
  public readonly backgrounds$ = of(backgrounds);

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
