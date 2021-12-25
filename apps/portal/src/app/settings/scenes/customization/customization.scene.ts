import { Component, OnInit } from '@angular/core';
import { Control, FormControl, FormGroup } from '@ng-stack/forms';
import { filter, tap } from 'rxjs/operators';
import { AvailableThemesState } from '../../states/available-themes/available-themes.state';
import { SelectedThemeState } from '../../states/selected-theme/selected-theme.state';

export interface Theme {
  name: string;
  path: string;
}

export interface CustomizationForm {
  theme: Control<Theme>;
}

@Component({
  selector: 'cf-customization',
  template: `
    <div>
      <h4>Customization</h4>

      <form [formGroup]="form">
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
      </form>
    </div>
  `,
  styles: [
    `
      h4 {
        margin-block-start: 0;
      }

      table {
        width: 100%;
      }

      ng-select {
        max-width: 400px;
      }
    `,
  ],
})
export class CustomizationScene implements OnInit {
  form = new FormGroup<CustomizationForm>({
    theme: new FormControl<Theme>(null),
  });

  themes$ = this.availableThemesState.themes$;

  constructor(
    private availableThemesState: AvailableThemesState,
    private selectedThemeState: SelectedThemeState
  ) {}

  ngOnInit() {
    this.themes$.subscribe((value) => console.log(value));

    this.selectedThemeState.theme$.subscribe((theme) => {
      this.form.patchValue({ theme }, { emitEvent: false });
    });

    this.form.controls.theme.valueChanges
      .pipe(
        filter((theme) => (theme ? true : false)),
        tap((theme) => this.selectedThemeState.selectTheme(theme))
      )
      .subscribe();
  }
}
