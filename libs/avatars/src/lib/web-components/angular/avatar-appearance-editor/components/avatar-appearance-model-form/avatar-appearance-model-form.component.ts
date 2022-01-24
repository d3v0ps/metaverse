import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Appearance, AppearanceFormat } from '../../../../../models/appearance';

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
              <cf-avatar-appearance-card> </cf-avatar-appearance-card>
            </ng-container>

            <div cfBlock="form-group">
              <label cfBlock="form-label" for="appearanceFormat">
                The Appearance file format. Only images and glb files are
                supported.
              </label>
              <select
                formControlName="format"
                id="appearanceFormat"
                class="form-control"
              >
                <option [ngValue]="null">Select an appearance format</option>
                <option
                  *ngFor="let format of appearanceFormats"
                  [ngValue]="format.value"
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
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  `,
})
export class AvatarAppearanceModelFormComponent implements OnInit, OnDestroy {
  @Input() set appearance(value: Appearance | undefined) {
    this.form.reset({
      id: value?.id || uuid(),
      format: value?.format || null,
      src: value?.src || null,
    });
  }

  appearanceFormats = Object.keys(AppearanceFormat).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: (AppearanceFormat as any)[key],
  }));

  form = new FormGroup({
    id: new FormControl<string>(uuid()),
    format: new FormControl<AppearanceFormat | null>(null),
    src: new FormControl<string | null>({ value: null, disabled: true }),
  });

  private readonly destroy$ = new Subject<void>();

  ngOnInit() {
    this.form.controls.format.valueChanges
      .pipe(
        tap((format) =>
          format
            ? this.form.controls.src.enable()
            : this.form.controls.src.disable()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
