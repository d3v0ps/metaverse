import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import {
  AppearanceFormat,
  AppearancePortrait,
} from '../../../../../models/appearance';
import { AvatarAppearanceProvider } from '../avatar-appearance-providers/avatar-appearance-providers.component';

export type AvatarAppearancePortraitModelForm = {
  id: string;
  format: AppearanceFormat;
  filename?: string;
  file?: File;
  src?: string;
  style: {
    id: string;
    properties: Record<string, any>;
  };
};

@Component({
  selector: 'cf-avatar-appearance-portrait-form',
  template: `
    <div cfBlock="avatar-appearance-portrait-form">
      <h2 cfElem="title">Portrait</h2>

      <cf-avatar-appearance-portrait-designer
        [appeareancePortrait]="{
          id: form.value.id,
          filename: form.value.filename || '',
          format: form.value!.format,
          src: form.value.src || '',
          style: form.value.style
        }"
      ></cf-avatar-appearance-portrait-designer>

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
              src: form.value.src || '',
              style: form.value.style
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

      <cf-avatar-appearance-providers
        [providers]="providers"
      ></cf-avatar-appearance-providers>
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
      style: value?.style || {
        id: 'avataaars',
        properties: {},
      },
    });
    this.form.markAsTouched();
  }

  form = new FormGroup({
    id: new FormControl(uuid()),
    filename: new FormControl(''),
    format: new FormControl(AppearanceFormat.Image),
    src: new FormControl(),
    file: new FormControl(),
    style: new FormControl(),
  });

  providers: AvatarAppearanceProvider[] = [
    {
      name: 'Avataaars',
      url: 'https://getavataaars.com/',
      color: '#6a39d7',
    },
    {
      name: 'DiceBear Avatars',
      url: 'https://avatars.dicebear.com/',
      color: '#23a7f0',
    },
  ];

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

  onProviderClick(provider: AvatarAppearanceProvider) {
    window.open(provider.url, '_blank');
  }
}
