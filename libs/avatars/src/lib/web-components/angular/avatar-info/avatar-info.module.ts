import { NgModule } from '@angular/core';
import { AvatarAppearancePortraitModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarsCarouselModule } from '@central-factory/avatars/web-components/angular/avatars-carousel/avatars-carousel.module';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { PopoverModule } from '@central-factory/web-components/angular/popover/popover.module';
import { AgeModule } from '@central-factory/worlds/web-components/angular/age/age.module';
import { AvatarBeliefsModule } from '../avatar-beliefs/avatar-beliefs.module';
import { AvatarBiographyModule } from '../avatar-biography/avatar-biography.module';
import { AvatarGenderModule } from '../avatar-gender/avatar-gender.module';
import { AvatarProfessionModule } from '../avatar-profession/avatar-profession.module';
import { AvatarInfoComponent } from './avatar-info.component';

@NgModule({
  imports: [
    EssentialsModule,
    AvatarAppearancePortraitModule,
    AvatarsCarouselModule,
    AgeModule,
    AvatarBiographyModule,
    AvatarProfessionModule,
    AvatarGenderModule,
    AvatarBeliefsModule,
    PopoverModule,
  ],
  declarations: [AvatarInfoComponent],
  exports: [AvatarInfoComponent],
})
export class AvatarInfoModule {}
