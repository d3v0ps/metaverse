/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  AppearanceFormat,
  AppearanceVariation
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
                  <ng-container *ngSwitchCase="'group'">
                    <h3 cfBlock="heading">{{ property.label }}</h3>
                  </ng-container>
                  <ng-container *ngSwitchCase="'file'">
                    <cf-file-upload
                      id="appearance-portrait-designer-{{ property.id }}"
                      [formControlName]="property.id">
                    </cf-file-upload>
                  </ng-container>
                  <ng-container *ngSwitchCase="'text'">
                    <input cfBlock="input"
                      id="appearance-portrait-designer-{{ property.id }}"
                      [formControlName]="property.id"
                      type="text" />
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
                      <option [ngValue]="null">Choose {{ property.label }}</option>
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
      <div cfElem="preview" *ngIf="
        designStyle?.hasViewer && showPreview">
        <cf-svg-icon src="assets/icons/mdi/dice-multiple.svg"
          (click)="generateRandomAppearance()">
        </cf-svg-icon>
        <cf-avatar-appearance-portrait
          *ngIf="styleForm.value && propertiesForm.valueChanges | async"
          [appearancePortrait]="{
            id: '1',
            filename: '',
            format: formats.Image,
            style: {
              id: styleForm.value,
              properties: propertiesForm.value
            }
          }" [rarity]="rarity"></cf-avatar-appearance-portrait>
        <cf-svg-icon *ngIf="false"
          (click)="onReloadPreviewClick()"
          src="assets/icons/mdi/reload.svg"></cf-svg-icon>
      </div>
    </div>
  `,
  styles: [
    `
    .avatar-appearance-portrait-designer  {
      /* display: flex;
      flex-wrap: wrap;
      --multiplier: calc(40rem - 100%); */
      display: flex;
      flex-wrap: wrap;
      --margin: 1rem;
      --multiplier: calc(60rem - 100%);
      margin: calc(var(--margin) * -1);

      & > * {
        max-width: 100%;
        flex-grow: 1;
        flex-basis: calc(var(--multiplier) * 999);
        margin: var(--margin);
      }

      & > :nth-child(2n - 1) {
        min-width: calc(20% - (var(--margin) * 2));
        max-height: 40rem;
        overflow: auto;
      }

      & > :nth-child(2n) {
        min-width: calc(30% - (var(--margin) * 2));
      }

      /* &__editor, &__preview {
        min-width: 33%;
        max-width: 100%;
        flex-grow: 1;
        flex-basis: calc(var(--multiplier) * 999);
        order: 1;
      } */

      /* overflow-y: auto;
        max-height: 70vh;
        min-width: 60%; */
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarAppearancePortraitDesignerComponent
  implements OnInit, OnDestroy {

  @Input() randomizeSkin = false;
  @Input() randomizeOutfit = false;
  @Input() randomizeInterval = 0;
  @Input() rarity = 'common';

  @Input() set appearancePortrait(value: AppearanceVariation | undefined) {
    this._portrait = value;
    this.styleForm.setValue(value?.style.id || 'avataaars', {
      emitEvent: false,
    });

    this.designStyle = this.availableOptions.find(option => option.id === this.styleForm.value) || this.availableOptions[0];
    this.generatePropertiesForm(this.designStyle);
    this.propertiesForm.patchValue(value?.style.properties || {});
    setTimeout(() => this.generateRandomAppearance(), 100);
  }
  get appearancePortrait(): AppearanceVariation | undefined {
    return this._portrait;
  }

  @Input() set availableStyles(styleIds: string[]) {
    this.availableOptions = this.styleOptions.filter(opt => styleIds.includes(opt.id));
    const portraitStyle = this.availableOptions.find(option => option.id === this.appearancePortrait?.style.id);
    const styleIsValid = portraitStyle && this.appearancePortrait?.style.properties ? true : false;
    this.designStyle = portraitStyle || this.availableOptions[0];
    this.styleForm.setValue(this.designStyle?.id);
    this.generatePropertiesForm(this.designStyle);
    const properties = (styleIsValid ? this.appearancePortrait?.style.properties : this.designStyle?.properties) || {};
    this.propertiesForm.patchValue(properties);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() propertiesChange = new EventEmitter<Record<string, any>>();
  @Output() formSubmit = new EventEmitter<{
    designStyle: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    properties: Record<string, any>;
  }>();

  showPreview = true;
  formats = AppearanceFormat;
  styleOptions: DesignStyle[] = [avataaarsDesignStyle, imageDesignStyle, lpcDesignStyle, dim3FileDesignSystem, dungeonsDesignStyle];
  availableOptions: DesignStyle[] = [...this.styleOptions];
  designStyle?: DesignStyle = this.styleOptions[0];

  styleForm = this.formBuilder.control(this.designStyle?.id || '');
  propertiesForm = this.formBuilder.group({});


  private destroy$ = new Subject<void>();

  private _portrait?: AppearanceVariation;

  private randomizeTimeout: any = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.styleForm.valueChanges
      .pipe(
        map((styleId) =>
          this.styleOptions.find((style) => style.id === styleId)
        ),
        tap((style) => {
          this.designStyle = style;
          this.generatePropertiesForm(style);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.propertiesForm.valueChanges.pipe(
      tap(values => this.propertiesChange.emit(values)),
      takeUntil(this.destroy$)
    ).subscribe();

    setTimeout(() =>
      this.generateRandomAppearance(), 1000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  generateRandomAppearance() {
    if (!this.designStyle) {
      return;
    }

    if (this.randomizeSkin) {
      this.generateRandomSkin();
    }

    if (this.randomizeOutfit) {
      this.generateRandomOutfit();
    }

    this.formSubmit.emit({
      designStyle: this.designStyle?.id,
      properties: this.propertiesForm.value,
    })

    if (this.randomizeInterval !== 0 && !this.randomizeTimeout) {

      console.debug('randomizeInterval', this.randomizeInterval);
      this.randomizeTimeout = setTimeout(() => {
        this.randomizeTimeout = null;
        this.generateRandomAppearance();
      }, this.randomizeInterval);
    }
  }

  generateRandomSkin() {
    const randomAppearance = this.designStyle?.properties.filter(property => property.type !== 'group').reduce(
      (result, { options, id }) => {
        if (!options) {
          return Object.assign(result, { [id]: '' });
        }

        const value = Math.floor(Math.random() * options.length);
        return Object.assign(result, { [id]: options[value].id });
      },
      {}
    );

    if (!randomAppearance) {
      return;
    }

    this.propertiesForm.setValue({ ...randomAppearance });

    if (this.designStyle?.id === 'avataaars') {
      const bodyVariation = Math.random() <= 0.5 ? 'female' : 'male';
      const hasFacialHair = Math.random() <= 0.4;
      if (!hasFacialHair || bodyVariation !== 'male') {
        this.propertiesForm.get('facialHairType')?.setValue(null);
        this.propertiesForm.get('eyeType')?.setValue('Default');
        this.propertiesForm.get('eyebrowType')?.setValue('Default');
        this.propertiesForm.get('mouthType')?.setValue('Default');
        // this.propertiesForm.get('clotheType')?.setValue('ShirtCrewNeck');

      }

      const hasGlasses = Math.random() <= 0.2;
      if (!hasGlasses) {
        this.propertiesForm.get('accessoriesType')?.setValue('Blank');
      }
    }

    if (this.designStyle?.id === 'lpc') {
      const hasFacialHair = Math.random() <= 0.2;
      if (!hasFacialHair || this.propertiesForm.get('bodyVariation')?.value !== 'male') {
        this.propertiesForm.get('facialHair')?.setValue(null);
      }

      this.propertiesForm.get('facialHair')?.setValue(hasFacialHair ? 'beard' : null);
      this.propertiesForm.get('torso2')?.setValue(null);
      this.propertiesForm.get('back')?.setValue(null);
      this.propertiesForm.get('head')?.setValue(null);
      this.propertiesForm.get('visor')?.setValue(null);
      this.propertiesForm.get('headAccesory')?.setValue(null);
      this.propertiesForm.get('rightHand')?.setValue(null);
      this.propertiesForm.get('leftHand')?.setValue(null);
      this.propertiesForm.get('bothHands')?.setValue(null);
      this.propertiesForm.get('animation')?.setValue('walk');
      this.propertiesForm.get('direction')?.setValue('south');
    }

    this.formSubmit.emit({
      designStyle: this.styleForm.value,
      properties: this.propertiesForm.value,
    });

  }

  generateRandomOutfit() {
    console.debug('generateRandomOutfit')

    if (this.designStyle?.id === 'lpc') {
      const bodyVariation = this.propertiesForm.get('bodyVariation')?.value || 'male';

      const torsoOptions = this.designStyle.properties.find(property => property.id === 'torso')?.options?.filter(option => !option.bodyVariations || option.bodyVariations.includes(bodyVariation));
      const headOptions = this.designStyle.properties.find(property => property.id === 'head')?.options?.filter(option => !option.bodyVariations || option.bodyVariations.includes(bodyVariation));

      if (torsoOptions) {
        const torso = torsoOptions[Math.floor(Math.random() * torsoOptions.length)];
        console.debug('torso', torso.id);
        this.propertiesForm.get('torso')?.setValue(torso.id);

        const hasTorso2 = Math.random() <= 0.5;
        const torso2 = hasTorso2 ? torsoOptions[Math.floor(Math.random() * torsoOptions.length)] : null;
        this.propertiesForm.get('torso2')?.setValue(torso2 ? torso2.id : null);
      }

      if (headOptions) {
        const hasHeadgear = Math.random() <= 0.2;
        const headgear = hasHeadgear ? headOptions[Math.floor(Math.random() * headOptions.length)] : null;
        this.propertiesForm.get('head')?.setValue(headgear ? headgear.id : null);
      }

      // const hasGlasses = Math.random() <= 0.2;
      // this.propertiesForm.get('accessory')?.setValue(hasGlasses ? 'glasses/formal_glasses' : null);
    }

    this.formSubmit.emit({
      designStyle: this.styleForm.value,
      properties: this.propertiesForm.value,
    });
  }

  private generatePropertiesForm(designStyle?: DesignStyle) {
    if (!designStyle) {
      this.formBuilder.group({});
      return;
    }

    this.propertiesForm = this.formBuilder.group(
      designStyle.properties.filter(property => property.type !== 'group').reduce(
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
    this.propertiesForm.controls[propertyId].setValue(event.id)
  }

  getColorValueFromDesignStyle(color: string, propertyId: string) {
    return this.designStyle?.properties.find(prop => prop.id === propertyId)?.options?.find(opt => opt.id === color)?.value;
  }

  onReloadPreviewClick() {
    this.showPreview = !this.showPreview;
    setTimeout(() => {
      this.showPreview = !this.showPreview;
    }, 100);
  }
}
