import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ManageAvatarsRoutingModule } from './manage-avatars-routing.module';
import { ManageAvatarsRoot } from './manage-avatars.root';

@NgModule({
  declarations: [ManageAvatarsRoot],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ManageAvatarsRoutingModule,
  ],
  providers: [],
  bootstrap: [ManageAvatarsRoot],
})
export class ManageAvatarsModule {}
