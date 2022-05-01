import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AvatarGenderModule } from '../avatar-gender/avatar-gender.module';
import { AvatarIdentityComponent } from './avatar-identity.component';

@NgModule({
  imports: [EssentialsModule, AvatarGenderModule],
  exports: [AvatarIdentityComponent],
  declarations: [AvatarIdentityComponent],
  providers: [],
})
export class AvatarIdentityModule {}
