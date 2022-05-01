import { HttpClientModule } from '@angular/common/http';
import { professions } from '@central-factory/avatars/data/demo/professions.data';
import { userAvatars } from '@central-factory/avatars/data/demo/user-avatars.data';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AgeModule } from '@central-factory/worlds/web-components/angular/age/age.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AvatarAppearancePortraitModule } from '../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarBiographyModule } from '../avatar-biography/avatar-biography.module';
import { AvatarGenderModule } from '../avatar-gender/avatar-gender.module';
import { AvatarProfessionModule } from '../avatar-profession/avatar-profession.module';
import { AvatarsCarouselModule } from '../avatars-carousel/avatars-carousel.module';
import { AvatarInfoComponent } from './avatar-info.component';

export default {
  title: 'Molecules/Avatar Info',
  component: AvatarInfoComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        EssentialsModule,
        AvatarAppearancePortraitModule,
        AvatarsCarouselModule,
        AgeModule,
        AvatarBiographyModule,
        AvatarProfessionModule,
        AvatarGenderModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE, 'css', 'angular', 'react', 'phaser'],
  },
} as Meta<AvatarInfoComponent>;

const Template: Story<AvatarInfoComponent> = (args: AvatarInfoComponent) => ({
  component: AvatarInfoComponent,
  props: args,
});

export const Full = Template.bind({});
Full.args = {
  avatar: userAvatars[0],
  world: {
    id: '0',
    kind: 'digital',
    year: 2020,
    meta: {
      name: 'Digital World',
      previewUrl: '',
    },
    archetypes: [],
    avatars: [],
    professions,
    map: {
      cells: {
        cultures: [
          {
            i: 0,
            name: 'Wildlands',
          },
        ],
        burgs: [
          {
            i: 0,
            name: 'Root Town',
            coa: {
              t1: 'gules',
              ordinaries: [
                {
                  ordinary: 'fess',
                  t: 'or',
                  line: 'engrailed',
                },
              ],
              charges: [
                {
                  charge: 'crossHummetty',
                  t: 'sable',
                  p: 'def',
                  size: 0.5,
                },
              ],
              shield: 'spanish',
            },
          },
        ],
        religions: [
          {
            i: 0,
            name: 'Ateist',
          },
        ],
      },
    },
  },
};
