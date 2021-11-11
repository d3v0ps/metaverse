import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalRoot } from './portal.root';

@NgModule({
  declarations: [PortalRoot],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),

    PortalRoutingModule,
  ],
  providers: [],
  bootstrap: [PortalRoot],
})
export class PortalModule {}
