import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AvatarProfessionComponent } from './avatar-profession.component';
import { AvatarProfessionsComponent } from './avatar-professions.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [AvatarProfessionComponent, AvatarProfessionsComponent],
  declarations: [AvatarProfessionComponent, AvatarProfessionsComponent],
  providers: [],
})
export class AvatarProfessionModule {}
