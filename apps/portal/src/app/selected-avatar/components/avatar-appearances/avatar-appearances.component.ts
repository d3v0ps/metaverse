import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@ng-stack/forms';
import { Appearance } from '../../models/appearance';

export class AvatarAppeareancesInput {
  //#endregion
  appearances!: Appearance[];
}

@Component({
  selector: 'cf-avatar-appearances',
  template: `
    <form [formGroup]="form" block="avatar-overview">
      <h2>Appearances</h2>

      <div fxLayout="column" fxLayoutGap="10px">
        <div fxLayout="row" fxLayoutGap="10px">
          <div>
            <button type="button" block="button" mod="secondary uppercase">
              <svg-icon
                src="assets/icons/mdi/plus.svg"
                elem="icon"
                [svgClass]="'icon__svg'"
              ></svg-icon>
              Add another appearance
            </button>
          </div>
        </div>

        <div fxLayout="row wrap" fxLayoutGap="5px">
          <div
            block="card"
            class="form-array appearance-card"
            formArrayName="appearances"
            *ngFor="let appearance of appearancesForm.controls; let i = index"
          >
            <!-- I have an appearance registered at -->

            <div
              elem="picture"
              style="background-image: url('{{
                appearance.value.largePreviewUrl
              }}')"
            >
              <!-- img
                    elem="image"
                    style="width: 200px;"
                    [src]="appearance.value.largePreviewUrl"
                  / -->

              <div elem="footer">
                <h4 elem="title">{{ appearance.value.protocol }}</h4>
              </div>
            </div>

            <div [formGroupName]="i" *ngIf="false">
              <div class="form-control">
                <label for="protocol-{{ i }}">Protocol:</label>
                <input
                  id="protocol-{{ i }}"
                  type="text"
                  formControlName="protocol"
                />
              </div>

              <div class="form-control">
                <label for="preview-url-{{ i }}">Preview Url:</label>
                <input
                  id="preview-url-{{ i }}"
                  type="text"
                  formControlName="largePreviewUrl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [
    `
      $card-width: 140px;
      $card-height: 100px;

      .appearance-card {
        width: $card-width;
        max-width: $card-width;
        min-height: $card-height;

        .card__picture {
          max-width: $card-width;
          min-height: $card-height;
        }

        .card__footer {
          font-size: 12px;
        }
      }
    `,
  ],
})
export class AvatarAppearancesComponent {
  @Input() set appearances(value: AvatarAppeareancesInput) {
    if (value) {
      value.appearances.forEach((appearance) => {
        this.addAppearance(appearance);
      });
    }
  }

  form = new FormGroup<AvatarAppeareancesInput>({
    appearances: new FormArray<Appearance>([]),
  });

  get appearancesForm() {
    return this.form.controls.appearances as FormArray<Appearance>;
  }

  addAppearance(appearance: Appearance) {
    this.appearancesForm.push(
      new FormGroup({
        protocol: new FormControl(appearance.protocol),
        smallPreviewUrl: new FormControl(appearance.smallPreviewUrl),
        largePreviewUrl: new FormControl(appearance.largePreviewUrl),
      })
    );
  }
}
