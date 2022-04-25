/* eslint-disable @typescript-eslint/no-explicit-any */
import { InjectionToken, Type } from '@angular/core';
import { NgxdProvider } from '@ngxd/core';

export type LocalApplicationComponentsProvider = NgxdProvider<
  Type<any>,
  Type<any>
>;

export const LOCAL_APPLICATION_COMPONENTS_PROVIDER = new InjectionToken<
  LocalApplicationComponentsProvider[]
>('ApplicationsModule.LocalApplicationComponentsProvider');
