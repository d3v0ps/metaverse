import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Appearance } from '../../../models/appearance';
import { AppearanceInfo } from '../../../models/appearance-info';
import { AvatarAppearanceInfoFormComponent } from './components/avatar-appearance-info-form/avatar-appearance-info-form.component';
import { AvatarAppearanceModelFormComponent } from './components/avatar-appearance-model-form/avatar-appearance-model-form.component';
import { AvatarAppearancePortraitFormComponent } from './components/avatar-appearance-portrait-form/avatar-appearance-portrait-form.component';

@Component({
  selector: 'cf-avatar-appearance-editor',
  template: `
    <div cfBlock="avatar-appearance-editor">
      <div cfElem="body">
        <cf-tabset theme="secondary">
          <cf-tab
            [title]="'Appearance'"
            [active]="true"
            icon="assets/icons/mdi/human.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content">
              <div cfElem="appearance-tab-content-model">
                <cf-avatar-appearance-model-form [appearance]="appearance">
                </cf-avatar-appearance-model-form>
              </div>
              <div cfElem="appearance-tab-content-portrait">
                <cf-avatar-appearance-portrait-form
                  [portrait]="appearance?.portrait"
                >
                </cf-avatar-appearance-portrait-form>
              </div>
            </div>
          </cf-tab>
          <cf-tab
            [title]="'Info'"
            [active]="false"
            icon="assets/icons/mdi/information.svg"
            [customClass]="'appearance-info-tab'"
          >
            <cf-avatar-appearance-info-form
              [info]="appearance?.info"
            ></cf-avatar-appearance-info-form>
          </cf-tab>
        </cf-tabset>
      </div>

      <div cfElem="footer">
        <div cfBlock="form-buttons">
          <button
            type="submit"
            cfBlock="button"
            [cfMod]="['primary']"
            [disabled]="false"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  `,
})
export class AvatarAppearanceEditorComponent {
  @ViewChild(AvatarAppearancePortraitFormComponent)
  portraitForm?: AvatarAppearancePortraitFormComponent;
  @ViewChild(AvatarAppearanceModelFormComponent)
  modelForm?: AvatarAppearanceModelFormComponent;
  @ViewChild(AvatarAppearanceInfoFormComponent)
  infoForm?: AvatarAppearanceInfoFormComponent;

  @Input() appearance?: Appearance;

  @Output() appearanceSubmit = new EventEmitter<Appearance>();

  appearanceInfo?: AppearanceInfo;

  onFormSubmit() {
    // this.appearanceSubmit.emit(appearance as Appearance);
  }
}
