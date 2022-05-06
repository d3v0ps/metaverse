import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AvatarAppearanceProvider } from '../avatar-appearance-providers/avatar-appearance-providers.component';

export type AvatarAppearanceModelForm = {
  id: string;
  format: string;
  filename?: string;
  file?: File;
  src?: string;
};

@Component({
  selector: 'cf-avatar-appearance-model-form',
  template: `
    <div cfBlock="avatar-appearance-model-form">
      <h2 cfElem="title">Appearance</h2>
      <form cfBlock="form" [formGroup]="form">
        <div cfBlock="form-content">
          <div cfBlock="form-group" cfMod="appearance">
            <ng-container *ngIf="form.value.format && form.value.src">
              <cf-avatar-appearance-card
                [appearance]="{
                  id: form.value.id,
                  filename: form.value?.filename || '',
                  format: form.value.format,
                  src: form.value.src,
                  portrait: {
                    id: form.value.id,
                    filename: form.value?.filename || '',
                    format: form.value.format,
                    src: form.value.src,
                    style: form.value.style
                  }
                }"
              >
              </cf-avatar-appearance-card>
            </ng-container>
            <ng-container *ngIf="!form.value.format || !form.value.src">
              <cf-avatar-appearance-card> </cf-avatar-appearance-card>
            </ng-container>

            <div cfBlock="form-group">
              <label cfBlock="form-label" for="appearanceFile">
                The appearance file *
              </label>
              <cf-file-upload
                [fileName]="form.value.filename"
                formControlName="file"
                id="appearanceFile"
                [accept]="validFormats"
                (ngModelChange)="onFileChange($event)"
              >
              </cf-file-upload>
              <span
                class="form-error"
                *ngIf="form.controls.filename?.errors?.required"
              >
                Must supply a valid file
              </span>
            </div>
          </div>
        </div>
      </form>

      <cf-avatar-appearance-providers
        [providers]="providers"
      ></cf-avatar-appearance-providers>
    </div>
  `,
})
export class AvatarAppearanceModelFormComponent implements OnInit, OnDestroy {
  @Input() set appearance(value: Partial<any> | undefined) {
    this.form.reset({
      id: value?.id || uuid(),
      filename: value?.filename || '',
      format: value?.format || '',
      src: value?.src || undefined,
      file: undefined,
    });
  }

  appearanceFormats = Object.keys({ Image: '' }).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: ({ Image: '' } as any)[key],
  }));

  form = new FormGroup({
    id: new FormControl(uuid()),
    filename: new FormControl('', [Validators.required]),
    format: new FormControl(''),
    src: new FormControl(),
    file: new FormControl(),
  });

  providers: AvatarAppearanceProvider[] = [
    {
      name: 'Ready Player Me',
      url: 'https://readyplayer.me/',
      color: '#313944',
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

  getValue(): AvatarAppearanceModelForm {
    return this.form.value as AvatarAppearanceModelForm;
  }
}
