import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenModule } from '@central-factory/web-components/angular/splash-screen/splash-screen.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalRoot } from './portal.root';
import { PortalLayoutSceneModule } from './scenes/portal-layout/portal-layout.module';
import { SelectedThemeState } from './settings/states/selected-theme/selected-theme.state';

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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (): (() => void) => {
        return (): void => {
          console.log('App initialized');
        };
      },
      multi: true,
      deps: [SelectedThemeState],
    },
  ],
  bootstrap: [PortalRoot],
})
export class PortalModule {}
