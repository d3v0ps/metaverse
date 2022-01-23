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
          *ngIf="portrait?.format && portrait?.src"
        >
          <cf-avatar-appearance-portrait
            [appearance]="{
              id: '',
              format: portrait!.format,
              src: portrait!.src,
              portrait: {
                format: portrait!.format,
                src: portrait!.src
              }
            }"
          >
          </cf-avatar-appearance-portrait>
        </div>
        <div
          style="margin-bottom: 1rem;"
          *ngIf="!portrait?.format || !portrait?.src"
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
    this.form.reset({
      format: value?.format || null,
      src: value?.src || null,
      file: null,
    });
  }

  form = new FormGroup(
    {
      format: new FormControl<AppearanceFormat | null>(AppearanceFormat.Image, [
        Validators.required,
      ]),
      src: new FormControl<string | null>(null, [Validators.required]),
      file: new FormControl<any>(null),
    },
    [Validators.required]
  );
}
