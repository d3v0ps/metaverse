import { NgModule } from '@angular/core';
import { AvatarAppearancePortraitModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarsCarouselModule } from '@central-factory/avatars/web-components/angular/avatars-carousel/avatars-carousel.module';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AgeModule } from '@central-factory/worlds/web-components/angular/age/age.module';
import { AvatarBiographyComponent } from './avatar-biography.component';

@NgModule({
  imports: [
    EssentialsModule,
    AvatarAppearancePortraitModule,
    AvatarsCarouselModule,
    AgeModule,
  ],
  declarations: [AvatarBiographyComponent],
  exports: [AvatarBiographyComponent],
})
export class AvatarBiographyModule {}
