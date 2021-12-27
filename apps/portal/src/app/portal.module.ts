import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenModule } from '@central-factory/web-components/angular/splash-screen/splash-screen.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalRoot } from './portal.root';
import { PortalLayoutSceneModule } from './scenes/portal-layout/portal-layout.module';

@NgModule({
  declarations: [PortalRoot],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SvgIconModule.forRoot(),
    PortalLayoutSceneModule,
    SplashScreenModule,

    PortalRoutingModule,
  ],
  providers: [],
  bootstrap: [PortalRoot],
})
export class PortalModule {}
