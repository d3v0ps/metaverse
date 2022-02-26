/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { STORE_APPLICATIONS_COLLECTION_PROVIDER } from '@central-factory/applications/collections/store-applications.collection';
import { USER_APPLICATIONS_COLLECTION_PROVIDER } from '@central-factory/applications/collections/user-applications.collection';
import { USER_APPLICATIONS_INITIAL_DATA_PROVIDER } from '@central-factory/applications/data/base/user-applications.data';
import { USER_ASSETS_COLLECTION_PROVIDER } from '@central-factory/assets/collections/user-assets.collection';
import { USER_AVATARS_COLLECTION_PROVIDER } from '@central-factory/avatars/collections/user-avatars.collection';
import { USER_AVATARS_DEMO_DATA_PROVIDER } from '@central-factory/avatars/data/demo/user-avatars.data';
import { NetworkService } from '@central-factory/network/services/network.service';
import { APPLICATION_PERMISSIONS_COLLECTION_PROVIDER } from '@central-factory/permissions/collections/application-permissions.collection';
import { USER_PREFERENCES_COLLECTION_PROVIDER } from '@central-factory/preferences/collections/user-preferences.collection';
import { CUSTOMIZATION_INITIAL_DATA_PROVIDER } from '@central-factory/preferences/data/base/customization/customization.data';
import { CustomizationSettingsState } from '@central-factory/preferences/states/customization/customization-settings.state';
import { USER_TOPICS_COLLECTION_PROVIDER } from '@central-factory/topics/collections/user-topics.collection';
import { USER_TOPICS_INITIAL_DATA_PROVIDER } from '@central-factory/topics/data/base/user-topics.data';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SplashScreenModule } from '@central-factory/web-components/angular/splash-screen/splash-screen.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { WindowModule } from '@central-factory/web-components/angular/window/window.module';
import { environment } from '../environments/environment';
import { PortalMocksModule } from './portal-mocks.module';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalRoot } from './portal.root';
import { PortalLayoutSceneModule } from './scenes/portal-layout/portal-layout.module';
import { BackgroundRenderer } from './services/background.renderer';

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
    PortalMocksModule.forRoot({
      enabled: environment.useMocks,
      autologin: environment.autologin,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => null,
      deps: [CustomizationSettingsState, BackgroundRenderer, NetworkService],
      multi: true,
    },
    STORE_APPLICATIONS_COLLECTION_PROVIDER,
    USER_APPLICATIONS_COLLECTION_PROVIDER,
    USER_TOPICS_COLLECTION_PROVIDER,
    APPLICATION_PERMISSIONS_COLLECTION_PROVIDER,
    USER_PREFERENCES_COLLECTION_PROVIDER,
    USER_AVATARS_COLLECTION_PROVIDER,
    USER_ASSETS_COLLECTION_PROVIDER,

    USER_AVATARS_DEMO_DATA_PROVIDER,
    USER_APPLICATIONS_INITIAL_DATA_PROVIDER,
    USER_TOPICS_INITIAL_DATA_PROVIDER,
    CUSTOMIZATION_INITIAL_DATA_PROVIDER,
  ],
  bootstrap: [PortalRoot],
})
export class PortalModule { }
