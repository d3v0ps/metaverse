import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@ng-stack/forms';
import { v4 as uuid } from 'uuid';
import { Appearance, AppearanceFormat } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-editor',
  template: `
    <form
      cfBlock="form"
      cfMod="horizontal"
      [formGroup]="form"
      (submit)="onFormSubmit()"
    >
      <div cfBlock="form-group">
        <h2 cfElem="title">Appearance</h2>

        <ng-container *ngIf="form.value.format && form.value.src">
          <cf-avatar-appearance-card
            [appearance]="{
              id: form.value.id,
              format: form.value.format,
              src: form.value.src,
              portrait: {
                format: form.value.format,
                src: form.value.src
              }
            }"
          >
          </cf-avatar-appearance-card>
        </ng-container>
        <ng-container *ngIf="!form.value.format || !form.value.src">
          <cf-avatar-appearance-card [showEmptyIcon]="false">
          </cf-avatar-appearance-card>
        </ng-container>

        <div cfBlock="form-group">
          <label cfBlock="form-label" for="appearanceFormar">
            The Appearance file format. Only images and glb files are supported.
          </label>
          <select
            formControlName="format"
            id="appearanceFormar"
            class="form-control"
          >
            <option [value]="null">Select an appearance format</option>
            <option
              *ngFor="let format of appearanceFormats"
              [value]="format.value"
            >
              {{ format.label }}
            </option>
          </select>
        </div>

        <div cfBlock="form-group">
          <label cfBlock="form-label" for="appearanceSrc">
            Url of the appearance file
          </label>
          <input
            class="input"
            cfBlock="form-control"
            type="text"
            id="appearanceSrc"
            formControlName="src"
            placeholder=""
            [disabled]="!form.value.format"
          />
        </div>

        <!-- input type="file" formControlName="file" class="form-control" / -->
      </div>

      <div cfBlock="form-group" formGroupName="portrait">
        <h2 cfElem="title">Portrait</h2>

        <div
          style="margin-bottom: 1rem;"
          *ngIf="form.value.portrait.format && form.value.portrait.src"
        >
          <cf-avatar-appearance-portrait
            [appearance]="{
              id: form.value.id,
              format: form.value.portrait.format,
              src: form.value.portrait.src,
              portrait: {
                format: form.value.portrait.format,
                src: form.value.portrait.src
              }
            }"
          >
          </cf-avatar-appearance-portrait>
        </div>
        <div
          style="margin-bottom: 1rem;"
          *ngIf="!form.value.portrait.format || !form.value.portrait.src"
        >
          <cf-avatar-appearance-portrait [showEmptyIcon]="false">
          </cf-avatar-appearance-portrait>
        </div>

        <!-- div cfBlock="form-group">
          <label cfBlock="form-label" for="portraitFormat">
            The Portrait file format. Only images and glb files are supported.
          </label>
          <select
            formControlName="format"
            id="portraitFormat"
            class="form-control"
          >
            <option [value]="null">Select an appearance format</option>
            <option
              *ngFor="let format of appearanceFormats"
              [value]="format.value"
            >
              {{ format.label }}
            </option>
          </select>
        </div -->

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
            [disabled]="!form.value.portrait.format"
          />
        </div>

        <!-- input type="file" formControlName="file" class="form-control" / -->
      </div>

      <div cfBlock="form-buttons">
        <button
          type="submit"
          cfBlock="button"
          [cfMod]="['primary']"
          [disabled]="!form.valid"
        >
          Save
        </button>
      </div>
    </form>
  `,
})
export class AvatarAppearanceEditorComponent {
  @Input() set appearance(value: Partial<Appearance> | undefined) {
    this.form.reset({
      id: value?.id || uuid(),
      format: value?.format || null,
      src: value?.src || null,
      file: null,
      portrait: {
        format: value?.portrait?.format || AppearanceFormat.Image,
        src: value?.portrait?.src || null,
        file: null,
      },
    });
  }

  @Output() appearanceSubmit = new EventEmitter<Appearance>();

  appearanceFormats = Object.keys(AppearanceFormat).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: (AppearanceFormat as any)[key],
  }));

  form = new FormGroup({
    id: new FormControl<string>(uuid(), [Validators.required]),
    format: new FormControl<AppearanceFormat | null>(null, [
      Validators.required,
    ]),
    src: new FormControl<string | null>(null, [Validators.required]),
    file: new FormControl<any>(null),
    portrait: new FormGroup(
      {
        format: new FormControl<AppearanceFormat | null>(
          AppearanceFormat.Image,
          [Validators.required]
        ),
        src: new FormControl<string | null>(null, [Validators.required]),
        file: new FormControl<any>(null),
      },
      [Validators.required]
    ),
  });

  onFormSubmit() {
    if (!this.form.valid) {
      return;
    }

    const appearance = {
      id: this.form.value.id,
      format: this.form.value.format,
      src: this.form.value.src,
    };

    this.appearanceSubmit.emit(appearance as Appearance);
  }
}
