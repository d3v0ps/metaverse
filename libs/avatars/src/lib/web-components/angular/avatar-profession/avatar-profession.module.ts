import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AvatarProfessionComponent } from './avatar-profession.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [AvatarProfessionComponent],
  declarations: [AvatarProfessionComponent],
  providers: [],
})
export class AvatarProfessionModule {}
