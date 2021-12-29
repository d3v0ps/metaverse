import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Customization,
  Theme,
} from '@central-factory/preferences/models/customization';
import { AvailableThemesState } from '@central-factory/preferences/states/customization/available-themes.state';
import { CustomizationSettingsState } from '@central-factory/preferences/states/customization/customization-settings.state';
import { Control, FormControl, FormGroup } from '@ng-stack/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

export interface CustomizationForm {
  theme: Control<Theme>;
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
export class CustomizationScene implements OnInit, OnDestroy {
  public readonly form = new FormGroup<CustomizationForm>({
    theme: new FormControl<Theme>(null),
  });

  public readonly themes$ = this.availableThemesState.themes$;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly availableThemesState: AvailableThemesState,
    private readonly customizationSettingsState: CustomizationSettingsState
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
            .setCustomizationSettings(settings)
            .subscribe()
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
