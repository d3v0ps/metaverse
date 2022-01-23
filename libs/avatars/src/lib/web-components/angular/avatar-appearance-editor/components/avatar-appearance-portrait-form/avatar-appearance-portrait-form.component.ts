import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@ng-stack/forms';
import {
  AppearanceFormat,
  AppearancePortrait,
} from '../../../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait-form',
  template: `
    <div cfBlock="avatar-appearance-portrait-form">
      <h2 cfElem="title">Portrait</h2>
      <form [formGroup]="form">
        <div
          style="margin-bottom: 1rem;"
          *ngIf="form.value?.format && form.value?.src"
        >
          <cf-avatar-appearance-portrait
            [appearancePortrait]="{
              format: form.value!.format,
              src: form.value!.src
            }"
          >
          </cf-avatar-appearance-portrait>
        </div>
        <div
          style="margin-bottom: 1rem;"
          *ngIf="!form.value?.format || !form.value?.src"
        >
          <cf-avatar-appearance-portrait> </cf-avatar-appearance-portrait>
        </div>

        <div cfBlock="form-group">
          <label cfBlock="form-label" for="portraitSrc">
            Url of the portrait file. Only png and jpg images are supported.
            144x144 images are recommended.
          </label>
          <input
            class="input"
            cfBlock="form-control"
            type="text"
            id="portraitSrc"
            formControlName="src"
            placeholder=""
            [disabled]="!portrait?.format"
          />
        </div>
      </form>
    </div>
  `,
})
export class AvatarAppearancePortraitFormComponent {
  @Input() set portrait(value: AppearancePortrait | undefined) {
    console.log('portrait', value);
    this.form.reset({
      format: (value?.format || null) as AppearanceFormat,
      src: (value?.src || null) as string,
      // file: null,
    });
  }

  form = new FormGroup<AppearancePortrait>(
    {
      format: new FormControl<AppearanceFormat>(AppearanceFormat.Image, [
        Validators.required,
      ]),
      src: new FormControl<string>(undefined, [Validators.required]),
      // file: new FormControl<any>(null),
    },
    [Validators.required]
  );
}
