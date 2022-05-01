import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Avatar } from '@central-factory/avatars/models';
import {
  Burg,
  Culture,
  Religion,
} from '@central-factory/worlds/models/fmg-map';
import { World } from '@central-factory/worlds/models/world';
import { Appearance, AppearancePortrait } from '../../../models/appearance';
import { AppearanceInfo } from '../../../models/appearance-info';
import { AvatarAppearanceInfoFormComponent } from './components/avatar-appearance-info-form/avatar-appearance-info-form.component';
import {
  AvatarAppearanceModelForm,
  AvatarAppearanceModelFormComponent,
} from './components/avatar-appearance-model-form/avatar-appearance-model-form.component';
import {
  AvatarAppearancePortraitFormComponent,
  AvatarAppearancePortraitModelForm,
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
        <cf-tabset>
          <cf-tab
            [title]="'Info'"
            icon="assets/icons/mdi/badge-account.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-info
                [avatar]="avatar"
                [world]="world"
              ></cf-avatar-info>
            </div>
          </cf-tab>
          <cf-tab
            [title]="'Appearance'"
            icon="assets/icons/mdi/account.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-appearance-portrait-designer
                [appearancePortrait]="appearance?.variations?.portrait"
                [availableStyles]="['avataaars', 'image']"
                [randomizeSkin]="randomizeSkin"
                [randomizeInterval]="skinRandomizeInterval"
                (formSubmit)="onFormSubmit($event)"
                [rarity]="rarity"
              >
              </cf-avatar-appearance-portrait-designer>
            </div>
          </cf-tab>
          <cf-tab
            [title]="'Outfits'"
            icon="assets/icons/mdi/sword-cross.svg"
            [customClass]="'appearance-tab'"
            [active]="true"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-appearance-portrait-designer
                [appearancePortrait]="appearance?.variations?.dim2"
                [randomizeOutfit]="randomizeOutfit"
                [randomizeInterval]="outfitRandomizeInterval"
                [availableStyles]="['lpc', 'image']"
                [rarity]="rarity"
                (formSubmit)="onFormSubmit($event)"
              >
              </cf-avatar-appearance-portrait-designer>
            </div>
          </cf-tab>
          <cf-tab
            [title]="'Knowledge'"
            icon="assets/icons/mdi/account.svg"
            [customClass]="'appearance-tab'"
          >
            <div cfBlock="appearance-tab-content-portrait">
              <cf-avatar-appearance-portrait-designer
                [appearancePortrait]="appearance?.variations?.others"
                [availableStyles]="['dungeons']"
                [rarity]="rarity"
              >
              </cf-avatar-appearance-portrait-designer>
            </div>
          </cf-tab>
        </cf-tabset>
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

  @Input() avatar?: Avatar;
  @Input() appearance?: Appearance;
  @Input() world?: World;
  @Input() culture?: Culture;
  @Input() religion?: Religion;
  @Input() birthPlace?: Burg;
  @Input() rarity = 'common';

  @Output() portraitChange = new EventEmitter<{
    id: string;
    properties: Record<string, any>;
  }>();
  @Output() appearanceSubmit = new EventEmitter<AvatarAppearanceEditorModel>();

  randomizeOutfit = false;
  randomizeSkin = false;
  skinRandomizeInterval = 0; // 30000;
  outfitRandomizeInterval = 0; // 3000;

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

  onFormSubmit({
    designStyle,
    properties,
  }: {
    designStyle: string;
    properties: Record<string, any>;
  }) {
    this.rarity = ['common', 'uncommon', 'rare', 'epic', 'legendary'][
      Math.floor(Math.random() * 5)
    ];

    if (designStyle === 'avataaars') {
      this.portraitChange.emit({
        id: designStyle,
        properties,
      });
    }

    if (
      designStyle === 'avataaars' &&
      this.appearance?.variations?.dim2?.style &&
      this.appearance?.variations?.dim2.style?.id === 'lpc'
    ) {
      this.appearance = Object.assign(this.appearance, {
        variations: {
          ...this.appearance.variations,
          dim2: {
            ...this.appearance.variations.dim2,
            style: {
              ...this.appearance.variations.dim2.style,
              properties: {
                ...this.appearance.variations.dim2.style.properties,
                ...this.mapAvataaarsPropsToLPC(properties),
              },
            },
          },
        },
      });
    }
  }

  /** TODO: REFACTOR THIS */
  private mapAvataaarsPropsToLPC(
    properties: Record<string, any>
  ): Record<string, any> {
    const keyMappings: Record<string, string> = {
      skinColor: 'bodyType',
      topType: 'hair',
      hairColor: 'hairColor',
      facialHairType: 'facialHair',
      facialHairColor: 'facialHairColor',
      // 'clotheType': 'torso',
      // 'clotheColor': '',
      accessoriesType: 'accessory',
    };

    const valueMappings: Record<
      string,
      Record<string, string | undefined | null>
    > = {
      skinColor: {
        Tanned: 'tanned',
        Yellow: 'tanned2',
        Pale: 'white',
        Light: 'light',
        Brown: 'olive',
        DarkBrown: 'brown',
        Black: 'black',
      },
      topType: {
        LongHairBigHair: 'princess',
        LongHairBob: 'page2',
        LongHairBun: 'longknot',
        LongHairCurly: 'jewfro',
        LongHairCurvy: 'princess',
        LongHairDreads: 'long',
        // 'LongHairFrida': 'LongHairFrida',
        LongHairFro: 'jewfro',
        LongHairFroBand: 'jewfro',
        LongHairNotTooLong: 'page2',
        LongHairShavedSides: 'long',
        LongHairMiaWallace: 'page2',
        LongHairStraight: 'long',
        LongHairStraight2: 'long',
        LongHairStraightStrand: 'long',
        ShortHairDreads01: 'jewfro',
        ShortHairDreads02: 'jewfro',
        ShortHairFrizzle: 'mohawk',
        ShortHairShaggyMullet: 'bangs',
        ShortHairShortCurly: 'bangsshort',
        ShortHairShortFlat: 'plain',
        ShortHairShortRound: 'plain',
        ShortHairShortWaved: 'bangs',
        // 'ShortHairSides': 'ShortHairSides',
        ShortHairTheCaesar: 'shorthawk',
        ShortHairTheCaesarSidePart: 'shorthawk',
      },
      hairColor: {
        Auburn: 'auburn',
        Black: 'black',
        Blonde: 'blonde',
        BlondeGolden: 'blonde2',
        Brown: 'brown2',
        BrownDark: 'brown',
        PastelPink: 'white-blonde',
        Blue: 'blue',
        Platinum: 'white',
        Red: 'brunette',
        SilverGray: 'white-cyan',
      },
      facialHairType: {
        Blank: undefined,
        BeardMedium: 'beard',
        BeardLight: 'beard',
        BeardMajestic: 'beard',
        MoustacheFancy: 'bigstache',
        MoustacheMagnum: 'mustache',
      },
      facialHairColor: {
        Auburn: 'auburn',
        Black: 'black',
        Blonde: 'blonde',
        BlondeGolden: 'blonde2',
        Brown: 'brown2',
        BrownDark: 'brown',
        Platinum: 'white',
        Red: 'brunette',
      },
      accessoriesType: {
        Blank: undefined,
        Kurt: 'glasses/formal_glasses',
        Sunglasses: 'glasses/formal_glasses',
        Wayfarers: 'glasses/formal_glasses',
        Round: 'glasses/formal_glasses',
        Prescription01: 'glasses/formal_glasses',
        Prescription02: 'glasses/formal_glasses',
      },
    };

    const bodyVariation =
      Math.random() > 0.5 || properties.facialHairType ? 'male' : 'female';
    const torso =
      bodyVariation === 'male'
        ? 'shirts/longsleeve/white_longsleeve'
        : 'tunics/white_tunic';
    const legs = 'pants/teal_pants';

    const result: Record<string, undefined | null | string> = Object.entries(
      properties
    ).reduce(
      (acc, [key, value]) => {
        const lpcKey = keyMappings[key];
        if (!lpcKey) {
          return acc;
        }

        return Object.assign(acc, {
          [lpcKey]: valueMappings[key][value],
        });
      },
      {
        bodyVariation,
        torso,
        legs,
      }
    );

    // if (bodyVariation === 'female') {
    //   result.facialHair = null;
    // }

    return result;
  }
}
