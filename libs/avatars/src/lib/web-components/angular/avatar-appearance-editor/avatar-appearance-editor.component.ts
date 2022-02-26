import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Appearance, AppearancePortrait } from '../../../models/appearance';
import { AppearanceInfo } from '../../../models/appearance-info';
import { AvatarAppearanceInfoFormComponent } from './components/avatar-appearance-info-form/avatar-appearance-info-form.component';
import {
  AvatarAppearanceModelForm,
  AvatarAppearanceModelFormComponent
} from './components/avatar-appearance-model-form/avatar-appearance-model-form.component';
import {
  AvatarAppearancePortraitFormComponent,
  AvatarAppearancePortraitModelForm
} from './components/avatar-appearance-portrait-form/avatar-appearance-portrait-form.component';

export type AvatarAppearanceEditorModel = {
  model: AvatarAppearanceModelForm;
  portrait: AvatarAppearancePortraitModelForm;
  info: AppearanceInfo;
};

@Component({
  selector: 'cf-avatar-appearance-editor',
  template: `
    <div cfBlock="avatar-appearance-editor">
      <div cfElem="body">
        <cf-tabset theme="secondary">
          <cf-tab
            [title]="'Portrait *'"
            [active]="true"
            icon="assets/icons/mdi/account.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-appearance-portrait-designer [appeareancePortrait]="appearance?.variations?.portrait"
                [availableStyles]="['avataaars', 'image']">
              </cf-avatar-appearance-portrait-designer>
            </div>
          </cf-tab>
          <cf-tab
            [title]="'2D Appearance *'"
            icon="assets/icons/mdi/human.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-appearance-portrait-designer [appeareancePortrait]="appearance?.variations?.dim2"
                [availableStyles]="['avataaars', 'image']"
                [availableStyles]="['lpc', 'image']">
              </cf-avatar-appearance-portrait-designer>
            </div>
          </cf-tab>
          <cf-tab
            [title]="'3D Appearance'"
            icon="assets/icons/mdi/human.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-appearance-portrait-designer [appeareancePortrait]="appearance?.variations?.dim3"
                [availableStyles]="['dim3-file']">
              </cf-avatar-appearance-portrait-designer>
            </div>
          </cf-tab>
          <cf-tab
            [title]="'Role-play'"
            icon="assets/icons/mdi/sword-cross.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-appearance-portrait-designer [appeareancePortrait]="appearance?.variations?.others"
                [availableStyles]="['dungeons']">
              </cf-avatar-appearance-portrait-designer>
            </div>
          </cf-tab>
        </cf-tabset>
      </div>

      <div cfElem="footer">
        <div cfBlock="form-buttons">
          <button
            cfBlock="button"
            [cfMod]="['primary', 'has-icon']"
            (click)="onSaveButtonClick()"
            [disabled]="!isValid"
          >
            <cf-svg-icon elem="icon" src="assets/icons/mdi/account-check.svg">
            </cf-svg-icon>
            Save
          </button>
        </div>
      </div>
    </div>
  `,
})
export class AvatarAppearanceEditorComponent {
  @ViewChild(AvatarAppearanceModelFormComponent)
  modelForm?: AvatarAppearanceModelFormComponent;
  @ViewChild(AvatarAppearancePortraitFormComponent)
  portraitForm?: AvatarAppearancePortraitFormComponent;
  @ViewChild(AvatarAppearanceInfoFormComponent)
  infoForm?: AvatarAppearanceInfoFormComponent;

  @Input() appearance?: Appearance;

  @Output() appearanceSubmit = new EventEmitter<AvatarAppearanceEditorModel>();

  get isValid(): boolean {
    return this.modelForm?.form.valid ? true : false;
    // return this.modelForm?.form.valid &&
    //   this.portraitForm?.form.valid &&
    //   this.infoForm?.form.valid
    //   ? true
    //   : false;
  }

  onSaveButtonClick() {
    if (!this.isValid) {
      return;
    }

    const model = this.modelForm?.form.value as AvatarAppearanceModelForm;
    const portrait = this.portraitForm?.form.value as AppearancePortrait;
    const info = this.infoForm?.form.value as AppearanceInfo;

    if (!model || !portrait || !info) {
      throw new Error('Unable to get data from forms');
    }

    this.appearanceSubmit.next({
      model,
      portrait,
      info,
    });
  }
}
