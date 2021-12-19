import { Component, Input } from '@angular/core';
import { Control, FormArray, FormControl, FormGroup } from '@ng-stack/forms';
import { Appearance } from '../../../domain/models/appearance';

export type AppearancePreviewCameraControl = Control<{
  position?: string | undefined;
  rotation?: string | undefined;
  scale?: string | undefined;
}>;

export interface FormAppearance extends Appearance {
  previewCamera?: AppearancePreviewCameraControl;
}

export interface AvatarAppearancesForm {
  appearances: FormAppearance[];
}

@Component({
  selector: 'cf-avatar-appearances',
  template: `
    <form [formGroup]="form" cfBlock="avatar-overview">
      <h2>Appearances</h2>

      <div fxLayout="column" fxLayoutGap="10px">
        <div fxLayout="row wrap" fxLayoutGap="5px">
          <div
            cfBlock="card"
            class="form-array appearance-card"
            formArrayName="appearances"
            *ngFor="let appearance of appearancesForm.controls; let i = index"
          >
            <cf-preview-avatar-appearance
              *ngIf="appearance.value.format === 'gltf'"
              width="100%"
              height="300px"
              [appearance]="appearance.value"
            ></cf-preview-avatar-appearance>

            <div
              cfElem="picture"
              style="background-image: url('{{ appearance.value.src }}')"
              *ngIf="appearance.value.format !== 'gltf'"
            >
              <div cfElem="footer">
                <h4 cfElem="title">{{ appearance.value.format }}</h4>
              </div>
            </div>

            <div [formGroupName]="i" *ngIf="false">
              <div class="form-control">
                <label for="format-{{ i }}">Format:</label>
                <input
                  id="format-{{ i }}"
                  type="text"
                  formControlName="format"
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
          <div cfBlock="card" class="appearance-card">
            <cf-svg-icon
              src="assets/icons/mdi/plus.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
          </div>
        </div>
      </div>
    </form>
  `,
})
export class AvatarAppearancesComponent {
  @Input() set appearances(value: Appearance[]) {
    if (value) {
      this.appearancesForm.clear();
      value.forEach((appearance) => {
        this.addAppearance(appearance);
      });
    }
  }

  form = new FormGroup<AvatarAppearancesForm>({
    appearances: new FormArray<FormAppearance>([]),
  });

  get appearancesForm() {
    return this.form.controls.appearances as FormArray<FormAppearance>;
  }

  addAppearance(appearance: Appearance) {
    this.appearancesForm.push(
      new FormGroup<FormAppearance>({
        format: new FormControl(appearance.format),
        smallPreviewUrl: new FormControl(appearance.smallPreviewUrl),
        src: new FormControl(appearance.src),
        previewCamera: new FormControl(appearance.previewCamera as any),
      })
    );
  }
}
