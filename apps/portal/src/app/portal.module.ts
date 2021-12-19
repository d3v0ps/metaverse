import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SceneModule } from '@central-factory/web-components/angular/scene/scene.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalRoot } from './portal.root';

@NgModule({
  declarations: [PortalRoot],
  imports: [
    BrowserModule,
    HttpClientModule,
    SvgIconModule.forRoot(),
    SceneModule,

    PortalRoutingModule,
  ],
  providers: [],
  bootstrap: [PortalRoot],
})
export class PortalModule {}
