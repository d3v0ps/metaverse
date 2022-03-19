import { APP_INITIALIZER } from '@angular/core';
import { NetworkService } from '@central-factory/network/services/network.service';
import { CustomizationSettingsState } from '@central-factory/preferences/states/customization/customization-settings.state';
import { BackgroundRenderer } from '../../services/background.renderer';

export const appInitializersProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => null,
    deps: [CustomizationSettingsState, BackgroundRenderer, NetworkService],
    multi: true,
  },
];
