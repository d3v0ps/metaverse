import { InjectionToken, Provider } from '@angular/core';
import {
  CITIES_APPLICATION_ID,
  CITIES_APPLICATION_KEY,
  CITIES_URL,
} from '@central-factory/worlds/states/worlds.state';
import { environment } from '../../environments/environment';
import { Environment } from '../../environments/environment.interface';

const providers: Partial<Record<keyof Environment, InjectionToken<unknown>>> = {
  citiesUrl: CITIES_URL,
  citiesAppId: CITIES_APPLICATION_ID,
  citiesApiKey: CITIES_APPLICATION_KEY,
};

export const environmentProviders: Provider[] = Object.keys(environment)
  .filter((key) => key in providers)
  .map((key) => {
    const provided = providers[key as keyof Environment] as InjectionToken<any>;
    return {
      provide: provided,
      useValue: environment[key as keyof Environment],
    };
  });
