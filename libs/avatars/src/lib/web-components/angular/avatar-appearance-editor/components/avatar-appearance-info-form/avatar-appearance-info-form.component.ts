import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AppearanceInfoBodyType,
  AppearanceInfoEyeColor,
  AppearanceInfoHairColor,
  AppearanceInfoHairStyle,
  AppearanceInfoSkinColor,
} from '../../../../../data/constants/appearance-info';
import { AppearanceInfo } from '../../../../../__generated__/models';

@Component({
  selector: 'cf-avatar-appearance-info-form',
  template: `
    <div cfBlock="avatar-appearance-info-form">
      <h2 cfElem="title">Info</h2>
      <form cfBlock="form" cfMod="horizontal" [formGroup]="form">
        <div cfBlock="form-group">
          <div cfBlock="form-group">
            <label cfBlock="form-label" for="skinColor"> Skin Color </label>
            <cf-color-picker-select
              id="skinColor"
              [options]="appearanceSkinColors"
            ></cf-color-picker-select>
          </div>

          <div cfBlock="form-group">
            <label cfBlock="form-label" for="hairColor"> Hair Color </label>
            <cf-color-picker-select
              id="hairColor"
              [options]="appearanceHairColors"
            ></cf-color-picker-select>
          </div>

          <div cfBlock="form-group">
            <label cfBlock="form-label" for="hairStyle"> Hair Style </label>
            <select
              formControlName="hairStyle"
              id="hairStyle"
              class="form-control"
            >
              <option [value]="null">Select hair style</option>
              <option
                *ngFor="let style of appearanceHairStyles"
                [value]="style.value"
              >
                {{ style.label }}
              </option>
            </select>
          </div>

          <div cfBlock="form-group">
            <label cfBlock="form-label" for="eyeColor"> Eye Color </label>
            <cf-color-picker-select
              id="eyeColor"
              [options]="appearanceEyeColors"
            ></cf-color-picker-select>
          </div>
        </div>

        <div cfBlock="form-group">
          <div cfBlock="form-group">
            <label cfBlock="form-label" for="bodyType"> Body Type </label>
            <select
              formControlName="bodyType"
              id="bodyType"
              class="form-control"
            >
              <option [value]="null">Select body type</option>
              <option
                *ngFor="let type of appearanceBodyTypes"
                [value]="type.value"
              >
                {{ type.label }}
              </option>
            </select>
          </div>

          <div cfBlock="form-group">
            <label cfBlock="form-label" for="fatPercentage">
              Fat Percentage
            </label>
            <input
              class="input"
              cfBlock="form-control"
              type="number"
              id="fatPercentage"
              formControlName="fatPercentage"
              min="0"
              max="100"
              step="1"
            />
          </div>

          <div cfBlock="form-group">
            <label cfBlock="form-label" for="height"> Height </label>
            <input
              class="input"
              cfBlock="form-control"
              type="number"
              id="height"
              formControlName="height"
            />
          </div>

          <div cfBlock="form-group">
            <label cfBlock="form-label" for="weight"> Weight </label>
            <input
              class="input"
              cfBlock="form-control"
              type="number"
              id="weight"
              formControlName="weight"
            />
          </div>
        </div>
      </form>
    </div>
  `,
})
export class AvatarAppearanceInfoFormComponent {
  appearanceSkinColors = Object.keys(AppearanceInfoSkinColor).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: (AppearanceInfoSkinColor as any)[key],
  }));

  appearanceHairColors = Object.keys(AppearanceInfoHairColor).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: (AppearanceInfoHairColor as any)[key],
  }));

  appearanceHairStyles = Object.keys(AppearanceInfoHairStyle).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: (AppearanceInfoHairStyle as any)[key],
  }));

  appearanceEyeColors = Object.keys(AppearanceInfoEyeColor).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: (AppearanceInfoEyeColor as any)[key],
  }));

  appearanceBodyTypes = Object.keys(AppearanceInfoBodyType).map((key) => ({
    label: key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: (AppearanceInfoBodyType as any)[key],
  }));

  @Input() set info(value: AppearanceInfo | undefined) {
    this.form.reset(
      {
        bodyType: value?.bodyType || null,
        eyeColor: value?.eyeColor || null,
        fatPercentage: value?.fatPercentage || null,
        hairColor: value?.hairColor || null,
        hairLength: value?.hairLength || null,
        hairStyle: value?.hairStyle || null,
        height: value?.height || null,
        skinColor: value?.skinColor || null,
        weight: value?.weight || null,
      },
      { emitEvent: false }
    );
  }

  form = new FormGroup({
    bodyType: new FormControl(null),
    eyeColor: new FormControl(null),
    fatPercentage: new FormControl(null, [
      Validators.min(0),
      Validators.max(100),
    ]),
    hairColor: new FormControl(null),
    hairLength: new FormControl(null),
    hairStyle: new FormControl(null),
    height: new FormControl(null),
    skinColor: new FormControl(null),
    weight: new FormControl(null),
  });
}
