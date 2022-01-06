import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationCardModule } from '@central-factory/applications/web-components/angular/application-card/application-card.module';
import { ApplicationSheetModule } from '@central-factory/applications/web-components/angular/application-sheet/application-sheet.module';
import { ApplicationToolbarModule } from '@central-factory/applications/web-components/angular/application-toolbar/application-toolbar.module';
import { ApplicationViewModule } from '@central-factory/applications/web-components/angular/application-view/application-view.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SidebarModule } from '@central-factory/web-components/angular/sidebar/sidebar.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ManageApplicationsRoutingModule } from './manage-applications-routing.module';
import { ManageApplicationsScene } from './manage-applications.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SidebarModule,
    SvgIconModule,
    ApplicationCardModule,
    ApplicationToolbarModule,
    ApplicationViewModule,
    ApplicationSheetModule,
    ManageApplicationsRoutingModule,
  ],
  declarations: [ManageApplicationsScene],
})
export class ManageApplicationsModule {}
