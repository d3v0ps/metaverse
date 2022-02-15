import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  AppearanceFormat,
  AppearancePortrait,
} from '@central-factory/avatars/models/appearance';
import { map, Subject, takeUntil, tap } from 'rxjs';
import {
  avataaarsDesignStyle,
  DesignStyle,
} from './design-styles/avataaars/avataaars.design-style';

export type SelectOption = {
  label: string;
  value: string;
};

@Component({
  selector: 'cf-avatar-appearance-portrait-designer',
  template: `
    <div cfBlock="avatar-appearance-portrait-designer">
      <div cfElem="editor">
        <form cfBlock="form">
          <div cfBlock="form-control">
            <label cfBlock="form-label" for="appearance-portrait-designer-style"
              >Style</label
            >
            <select
              cfBlock="select"
              id="appearance-portrait-designer-style"
              [formControl]="styleForm"
            >
              <option value="">Choose Style</option>
              <option *ngFor="let style of styleOptions" [ngValue]="style.id">
                {{ style.name }}
              </option>
            </select>
          </div>
        </form>

        <form cfBlock="form" [formGroup]="propertiesForm">
          <ng-container *ngIf="designStyle && designStyle.properties">
            <ng-container *ngFor="let property of designStyle.properties">
              <div
                cfBlock="form-control"
                *ngIf="propertiesForm.controls[property.id]"
              >
                <label
                  cfBlock="form-label"
                  for="appearance-portrait-designer-{{ property.id }}"
                  >{{ property.label }}</label
                >
                <select
                  cfBlock="select"
                  id="appearance-portrait-designer-{{ property.id }}"
                  [formControlName]="property.id"
                >
                  <option value="">Choose {{ property.label }}</option>
                  <option
                    *ngFor="let option of property.options"
                    [ngValue]="option.id"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
            </ng-container>
          </ng-container>
        </form>
      </div>
      <div cfElem="preview">
        <cf-avatar-appearance-portrait
          *ngIf="styleForm.value"
          [appearancePortrait]="{
            id: '1',
            filename: '',
            format: formats.Image,
            style: {
              id: styleForm.value,
              properties: propertiesForm.value
            }
          }"
        ></cf-avatar-appearance-portrait>
      </div>
    </div>
  `,
})
export class AvatarAppearancePortraitDesignerComponent
  implements OnInit, OnDestroy
{
  @Input() set appeareancePortrait(value: AppearancePortrait | undefined) {
    this.styleForm.setValue(value?.style.id || 'avataaars', {
      emitEvent: false,
    });
    this.propertiesForm = this.generatePropertiesForm(this.styleForm.value);
    this.propertiesForm.setValue(value?.style.properties || {});
  }

  formats = AppearanceFormat;
  styleOptions: DesignStyle[] = [avataaarsDesignStyle];
  designStyle?: DesignStyle = this.styleOptions[0];

  styleForm = this.formBuilder.control(this.designStyle?.id || '');
  propertiesForm = this.generatePropertiesForm(this.designStyle);

  private destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.styleForm.valueChanges
      .pipe(
        map((styleId) =>
          this.styleOptions.find((style) => style.id === styleId)
        ),
        tap((style) => {
          this.propertiesForm = this.generatePropertiesForm(style);
          this.designStyle = style;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private generatePropertiesForm(designStyle?: DesignStyle) {
    if (!designStyle) {
      return this.formBuilder.group({});
    }

    return this.formBuilder.group(
      designStyle.properties.reduce(
        (acc, property) =>
          Object.assign(acc, {
            [property.id]:
              property.defaultValue ||
              (property.options.length > 0 ? property.options[0].id : ''),
          }),
        {}
      )
    );
  }
}
