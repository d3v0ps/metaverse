import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import {
  AppearanceFormat,
  AppearancePortrait,
} from '../../../../../models/appearance';

export type AvatarAppearancePortraitModelForm = {
  id: string;
  format: AppearanceFormat;
  filename?: string;
  file?: File;
  src?: string;
};

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
              id: form.value.id,
              filename: form.value.filename || '',
              format: form.value!.format,
              src: form.value.src || ''
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

        <!-- div cfBlock="form-group">
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
          />
        </div -->

        <div cfBlock="form-group">
          <label cfBlock="form-label" for="appearanceFile">
            The portrait file
          </label>
          <cf-file-upload
            [fileName]="form.value.filename"
            formControlName="file"
            id="appearanceFile"
            [accept]="validFormats"
            (ngModelChange)="onFileChange($event)"
          >
          </cf-file-upload>
        </div>
      </form>
    </div>
  `,
})
export class AvatarAppearancePortraitFormComponent
  implements OnInit, OnDestroy
{
  @Input() set portrait(value: AppearancePortrait | undefined) {
    this.form.reset({
      id: value?.id || uuid(),
      filename: value?.filename || '',
      format: value?.format || AppearanceFormat.Image,
      src: value?.src || undefined,
      file: undefined,
    });
    this.form.markAsTouched();
  }

  form = new FormGroup({
    id: new FormControl(uuid()),
    filename: new FormControl(''),
    format: new FormControl(AppearanceFormat.Image),
    src: new FormControl(),
    file: new FormControl(),
  });

  imageFormats = ['.png', '.jpg', '.jpeg'];
  modelFormats = ['.glb', '.gltf', '.fbx', '.obj'];
  validFormats = [...this.imageFormats, ...this.modelFormats].join(',');

  private readonly destroy$ = new Subject<void>();

  ngOnInit() {
    this.form.controls.format.valueChanges
      .pipe(
        tap((format) =>
          format
            ? this.form.controls.src?.enable()
            : this.form.controls.src?.disable()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onFileChange(value?: File) {
    this.form.controls.filename?.setValue(value?.name || '', {
      emitEvent: false,
    });

    if (value) {
      const objectUrl = URL.createObjectURL(value);
      this.form.controls.src?.setValue(objectUrl, { emitEvent: false });
    }
  }
}
