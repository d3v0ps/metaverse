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
      <div class="form-array" formArrayName="appearances">
        <h2>Appearances</h2>
        <button type="button">+ Add another appearance</button>

        <div
          *ngFor="let appearance of appearancesForm.controls; let i = index"
          class="appearance-form"
        >
          I have an appearance registered at {{ appearance.value.protocol }}

          <img style="width: 200px;" [src]="appearance.value.largePreviewUrl" />

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
    </form>
  `,
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
