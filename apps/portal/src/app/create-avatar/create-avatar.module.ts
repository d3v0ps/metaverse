import { NgModule } from '@angular/core';
import { CreateAvatarRoutingModule } from './create-avatar-routing.module';
import { CreateAvatarView } from './views/create-avatar.view';

@NgModule({
  imports: [CreateAvatarRoutingModule],
  declarations: [CreateAvatarView],
})
export class CreateAvatarModule {}
