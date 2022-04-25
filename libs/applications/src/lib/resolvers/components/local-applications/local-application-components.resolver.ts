import { Inject, Injectable, Type } from '@angular/core';
import { NgxdResolver } from '@ngxd/core';
import {
  LocalApplicationComponentsProvider,
  LOCAL_APPLICATION_COMPONENTS_PROVIDER,
} from './local-application-components.provider';

@Injectable({
  providedIn: 'root',
})
export class LocalApplicationComponentsResolver extends NgxdResolver<
  Type<any>,
  Type<any>
> {
  constructor(
    @Inject(LOCAL_APPLICATION_COMPONENTS_PROVIDER)
    providers: LocalApplicationComponentsProvider[]
  ) {
    super(providers);
  }
}
