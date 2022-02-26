import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  AppearanceFormat,
  AppearancePortrait
} from '@central-factory/avatars/models/appearance';
import { map, Subject, takeUntil, tap } from 'rxjs';
import {
  avataaarsDesignStyle
} from './design-styles/avataaars/avataaars.design-style';
import { dim3FileDesignSystem } from './design-styles/dim3-file/dim3-file.design-style';
import { dungeonsDesignStyle } from './design-styles/dungeons/dungeons.design-style';
import { imageDesignStyle } from './design-styles/image/image.design-style';
import { lpcDesignStyle } from './design-styles/lpc/lpc.design-style';
import { DesignStyle } from './design-styles/models/design-style';

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
              <option *ngFor="let style of availableOptions" [ngValue]="style.id">
              {{ style.name }}
              </option>
            </select>
            <h4 cfBlock="heading" [cfMod]="['light']" *ngIf="designStyle?.id !== 'image'">
              <cf-svg-icon cfElem="icon" src="assets/icons/mdi/web-box.svg">
              </cf-svg-icon>
              <a [href]="designStyle?.url" target="__blank">{{ designStyle?.name }}</a>
            </h4>
            <span cfBlock="text">
              {{ designStyle?.description }}
            </span>
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
                <ng-container [ngSwitch]="property.type">
                  <ng-container *ngSwitchCase="'file'">
                    <cf-file-upload
                      id="appearance-portrait-designer-{{ property.id }}"
                      [formControlName]="property.id">
                    </cf-file-upload>
                  </ng-container>
                  <ng-container *ngSwitchCase="'number'">
                    <input cfBlock="input"
                      id="appearance-portrait-designer-{{ property.id }}"
                      [formControlName]="property.id"
                      type="number" />
                  </ng-container>
                  <ng-container *ngSwitchCase="'select'">
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
                  </ng-container>

                  <ng-container *ngSwitchCase="'color'">
                    <cf-color-picker-select [options]="property.options || []" *ngIf="designStyle"
                      [value]="getColorValueFromDesignStyle(propertiesForm.get(property.id)?.value, property.id)"
                      (selectColor)="onColorPickerSelectColor($event, property.id)"></cf-color-picker-select>
                  </ng-container>
                </ng-container>
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
  styles: [
    `
    .avatar-appearance-portrait-designer  {
      &__editor {
        overflow-y: auto;
        max-height: 70vh;
      }
    }
    `
  ]
})
export class AvatarAppearancePortraitDesignerComponent
  implements OnInit, OnDestroy {
  @Input() set appeareancePortrait(value: AppearancePortrait | undefined) {
    this._portrait = value;
    this.styleForm.setValue(value?.style.id || 'avataaars', {
      emitEvent: false,
    });
    this.designStyle = this.availableOptions.find(option => option.id === this.styleForm.value) || this.availableOptions[0];
    this.propertiesForm = this.generatePropertiesForm(this.designStyle);
    this.propertiesForm.patchValue(value?.style.properties || {});
  }
  get appeareancePortrait(): AppearancePortrait | undefined {
    return this._portrait;
  }

  @Input() set availableStyles(styleIds: string[]) {
    this.availableOptions = this.styleOptions.filter(opt => styleIds.includes(opt.id));
    const portraitStyle = this.availableOptions.find(option => option.id === this.appeareancePortrait?.style.id);
    const styleIsValid = portraitStyle && this.appeareancePortrait?.style.properties ? true : false;
    this.designStyle = portraitStyle || this.availableOptions[0];
    this.styleForm.setValue(this.designStyle?.id);
    this.propertiesForm = this.generatePropertiesForm(this.designStyle);
    const properties = (styleIsValid ? this.appeareancePortrait?.style.properties : this.designStyle?.properties) || {};
    this.propertiesForm.patchValue(properties);
  }

  formats = AppearanceFormat;
  styleOptions: DesignStyle[] = [avataaarsDesignStyle, imageDesignStyle, lpcDesignStyle, dim3FileDesignSystem, dungeonsDesignStyle];
  availableOptions: DesignStyle[] = [...this.styleOptions];
  designStyle?: DesignStyle = this.styleOptions[0];

  styleForm = this.formBuilder.control(this.designStyle?.id || '');
  propertiesForm = this.generatePropertiesForm(this.designStyle);

  private destroy$ = new Subject<void>();

  private _portrait?: AppearancePortrait;

  constructor(private formBuilder: FormBuilder) { }

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
              (property.options && property.options.length > 0 ? property.options[0].id : ''),
          }),
        {}
      )
    );
  }

  onColorPickerSelectColor(event: any, propertyId: string) {
    console.log(propertyId, event);
    this.propertiesForm.controls[propertyId].setValue(event.id)
  }

  getColorValueFromDesignStyle(color: string, propertyId: string) {
    return this.designStyle?.properties.find(prop => prop.id === propertyId)?.options?.find(opt => opt.id === color)?.value;
  }
}
