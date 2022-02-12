import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationSheetModule } from '@central-factory/applications/web-components/angular/application-sheet/application-sheet.module';
import { ApplicationToolbarModule } from '@central-factory/applications/web-components/angular/application-toolbar/application-toolbar.module';
import { ApplicationViewModule } from '@central-factory/applications/web-components/angular/application-view/application-view.module';
import { TopicCardModule } from '@central-factory/topics/web-components/angular/topic-card/topic-card.module';
import { TopicFormModule } from '@central-factory/topics/web-components/angular/topic-form/topic-form.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { CommandBarModule } from '@central-factory/web-components/angular/command-bar/command-bar.module';
import { SidebarModule } from '@central-factory/web-components/angular/sidebar/sidebar.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AssistantAvatarModule } from './components/assistant-avatar/assistant-avatar.module';
import { StartRoutingModule } from './start-routing.module';
import { StartScene } from './start.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SidebarModule,
    SvgIconModule,
    DragDropModule,
    ApplicationSheetModule,
    ApplicationToolbarModule,
    ApplicationViewModule,
    AssistantAvatarModule,
    CommandBarModule,
    TopicCardModule,
    StartRoutingModule,
    TopicFormModule,
  ],
  declarations: [StartScene],
  exports: [StartScene],
})
export class StartModule {}
