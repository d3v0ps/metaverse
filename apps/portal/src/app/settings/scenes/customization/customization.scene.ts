import { Component, OnDestroy, OnInit } from '@angular/core';
import { Control, FormControl, FormGroup } from '@ng-stack/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AvailableThemesState } from '../../states/available-themes/available-themes.state';
import { CustomizationSettingsState } from '../../states/customization-settings/customization-settings.state';

export interface Theme {
  name: string;
  path: string;
}

export interface CustomizationForm {
  theme: Control<Theme>;
  showSplashScreen: boolean;
  playSounds: boolean;
}

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
              <label> Show Splash Screen </label>
            </td>
            <td>
              <input type="checkbox" formControlName="showSplashScreen" />
            </td>
          </tr>
        </table>

        <h4>Sounds</h4>
        <table>
          <tr>
            <td>
              <label> Play Sounds </label>
            </td>
            <td>
              <input type="checkbox" formControlName="playSounds" />
            </td>
          </tr>
        </table>
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

      ng-select {
        max-width: 400px;
      }

      td {
        width: 200px;
      }
    `,
  ],
})
export class CustomizationScene implements OnInit, OnDestroy {
  form = new FormGroup<CustomizationForm>({
    theme: new FormControl<Theme>(null),
    showSplashScreen: new FormControl<boolean>(true),
    playSounds: new FormControl<boolean>(true),
  });

  themes$ = this.availableThemesState.themes$;

  private destroy$ = new Subject();

  constructor(
    private availableThemesState: AvailableThemesState,
    private customizationSettingsState: CustomizationSettingsState
  ) {}

  ngOnInit(): void {
    this.customizationSettingsState.customizationSettings$
      .pipe(
        takeUntil(this.destroy$),
        tap((settings) => this.form.patchValue(settings, { emitEvent: false }))
      )
      .subscribe();

    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap((settings) =>
          this.customizationSettingsState.setCustomizationSettings(settings)
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
