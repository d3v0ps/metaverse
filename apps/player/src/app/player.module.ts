import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PlayerRoot } from './player.root';

@NgModule({
  declarations: [PlayerRoot],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [PlayerRoot],
})
export class PlayerModule {}
