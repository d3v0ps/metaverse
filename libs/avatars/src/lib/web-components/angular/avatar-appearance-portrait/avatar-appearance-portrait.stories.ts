import { HttpClientModule } from '@angular/common/http';
import { userAvatars } from '@central-factory/avatars/data/demo/user-avatars.data';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { PhaserRendererModule } from '@central-factory/web-components/angular/phaser/phaser-renderer.module';
import { SpritesheetModule } from '@central-factory/web-components/angular/spritesheet/spritesheet.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AvatarAppearancePortraitComponent } from './avatar-appearance-portrait.component';
import { AvatarAppearancePortraitAvataaarsModule } from './components/avatar-appearance-portrait-avataaars/avatar-appearance-portrait-avataaars.module';
import { AvatarAppearanceSpritesheetModule } from './components/avatar-appearance-spritesheet/avatar-appearance-spritesheet.module';

export default {
  title: 'Atoms/Avatar Portrait',
  component: AvatarAppearancePortraitComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        EssentialsModule,
        AvatarAppearancePortraitAvataaarsModule,
        AvatarAppearanceSpritesheetModule,
        SpritesheetModule,
        PhaserRendererModule,
      ],
    }),
  ],
  argTypes: {
    appearance: {
      control: { type: 'object' },
    },
    showEmptyIcon: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    badges: [BADGE.STABLE, 'css', 'angular'],
  },
} as Meta<AvatarAppearancePortraitComponent>;

const AvatarPortraitStory: Story<AvatarAppearancePortraitComponent> = (
  args: AvatarAppearancePortraitComponent
) => ({
  props: args,
});
AvatarPortraitStory.argTypes = {
  avatar: {
    control: { type: 'object' },
  },
  displayComponent: {
    control: { type: 'select' },
    options: ['avataaars', 'lpc'],
  },
};

export const Avataaars = AvatarPortraitStory.bind({});
Avataaars.args = {
  avatar: userAvatars[0],
  displayComponent: 'avataaars',
};
Avataaars.argTypes = { ...AvatarPortraitStory.argTypes };
Avataaars.parameters = {
  badges: [BADGE.STABLE, 'css', 'angular', 'react'],
};

export const LiberatedPixelCup = AvatarPortraitStory.bind({});
LiberatedPixelCup.args = {
  avatar: userAvatars[0],
  displayComponent: 'lpc',
};
LiberatedPixelCup.argTypes = { ...AvatarPortraitStory.argTypes };
LiberatedPixelCup.parameters = {
  badges: [BADGE.STABLE, 'css', 'angular', 'phaser'],
};
