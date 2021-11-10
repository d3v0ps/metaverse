import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalRoot } from './portal.root';

@NgModule({
  declarations: [PortalRoot],
  imports: [
    BrowserModule,
    HttpClientModule,

    PortalRoutingModule
  ],
  providers: [],
  bootstrap: [PortalRoot],
})
export class PortalModule {}
