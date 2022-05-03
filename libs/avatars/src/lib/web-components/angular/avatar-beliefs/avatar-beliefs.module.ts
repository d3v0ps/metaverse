import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AvatarBeliefsComponent } from './avatar-beliefs.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [AvatarBeliefsComponent],
  declarations: [AvatarBeliefsComponent],
  providers: [],
})
export class AvatarBeliefsModule {}
