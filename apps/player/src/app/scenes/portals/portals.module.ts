import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationCardModule } from '@central-factory/applications/web-components/angular/application-card/application-card.module';
import { ApplicationsCarouselModule } from '@central-factory/applications/web-components/angular/applications-carousel/applications-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SpinnerModule } from '@central-factory/web-components/angular/spinner/spinner.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TabsetModule } from '@central-factory/web-components/angular/tabset/tabset.module';
import { WindowModule } from '@central-factory/web-components/angular/window/window.module';
import { StartModule } from '../start/start.module';
import { ApplicationPermissionsModule } from './components/application-permissions/application-permissions.module';
import { PortalsPreferencesComponent } from './components/preferences/portals-preferences.component';
import { PortalsRoutingModule } from './portals-routing.module';
import { PortalsScene } from './portals.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    FormsModule,
    ReactiveFormsModule,
    SvgIconModule,
    WindowModule,
    TabsetModule,
    ApplicationCardModule,
    ApplicationsCarouselModule,
    PortalsRoutingModule,
    StartModule,
    ApplicationPermissionsModule,
    SpinnerModule,
  ],
  declarations: [PortalsScene, PortalsPreferencesComponent],
})
export class PortalsModule {}
