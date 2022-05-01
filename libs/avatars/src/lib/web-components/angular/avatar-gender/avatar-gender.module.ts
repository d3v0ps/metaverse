import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AvatarGenderComponent } from './avatar-gender.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [AvatarGenderComponent],
  declarations: [AvatarGenderComponent],
  providers: [],
})
export class AvatarGenderModule {}
