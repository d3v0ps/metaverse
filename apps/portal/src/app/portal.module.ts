/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SplashScreenModule } from '@central-factory/web-components/angular/splash-screen/splash-screen.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { WindowModule } from '@central-factory/web-components/angular/window/window.module';
import { environment } from '../environments/environment';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalRoot } from './portal.root';
import { PortalProvidersModule } from './providers/providers.module';
import { PortalLayoutSceneModule } from './scenes/portal-layout/portal-layout.module';

@NgModule({
  declarations: [PortalRoot],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SvgIconModule.forRoot(),
    BemModule,
    PortalLayoutSceneModule,
    SplashScreenModule,
    WindowModule,
    LayoutModule,

    PortalRoutingModule,
    PortalProvidersModule.forRoot({
      mocks: {
        enabled: environment.useMocks,
        autologin: environment.autologin,
      },
    }),
  ],
  providers: [],
  bootstrap: [PortalRoot],
})
export class PortalModule {}
