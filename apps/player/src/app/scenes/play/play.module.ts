import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationCardModule } from '@central-factory/applications/web-components/angular/application-card/application-card.module';
import { ApplicationSheetModule } from '@central-factory/applications/web-components/angular/application-sheet/application-sheet.module';
import { ApplicationToolbarModule } from '@central-factory/applications/web-components/angular/application-toolbar/application-toolbar.module';
import { ApplicationViewModule } from '@central-factory/applications/web-components/angular/application-view/application-view.module';
import { ApplicationsCarouselModule } from '@central-factory/applications/web-components/angular/applications-carousel/applications-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SidebarModule } from '@central-factory/web-components/angular/sidebar/sidebar.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { PlayRoutingModule } from './play-routing.module';
import { PlayScene } from './play.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    SvgIconModule,
    DragDropModule,
    ApplicationCardModule,
    ApplicationToolbarModule,
    ApplicationViewModule,
    ApplicationSheetModule,
    ApplicationsCarouselModule,
    PlayRoutingModule,
  ],
  declarations: [PlayScene],
})
export class PlayModule {}
