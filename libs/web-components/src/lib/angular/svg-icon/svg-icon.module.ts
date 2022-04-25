import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { SVG_ICON_REGISTRY_PROVIDER } from './svg-icon-registry.service';
import { SvgIconComponent } from './svg-icon.component';
import { SvgHttpLoader, SvgLoader } from './svg-loader';

export interface SvgIconConfig {
  loader?: Provider;
}

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [SvgIconComponent],
  exports: [SvgIconComponent],
})
export class SvgIconModule {
  static forRoot(
    config: SvgIconConfig = {}
  ): ModuleWithProviders<SvgIconModule> {
    return {
      ngModule: SvgIconModule,
      providers: [
        SVG_ICON_REGISTRY_PROVIDER,
        config.loader || { provide: SvgLoader, useClass: SvgHttpLoader },
      ],
    };
  }
}
