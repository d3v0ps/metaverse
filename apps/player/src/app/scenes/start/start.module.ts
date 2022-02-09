import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationCardModule } from '@central-factory/applications/web-components/angular/application-card/application-card.module';
import { ApplicationHeaderModule } from '@central-factory/applications/web-components/angular/application-header/application-header.module';
import { ApplicationIconModule } from '@central-factory/applications/web-components/angular/application-icon/application-icon.module';
import { ApplicationSheetModule } from '@central-factory/applications/web-components/angular/application-sheet/application-sheet.module';
import { ApplicationShortcutModule } from '@central-factory/applications/web-components/angular/application-shortcut/application-shortcut.module';
import { ApplicationToolbarModule } from '@central-factory/applications/web-components/angular/application-toolbar/application-toolbar.module';
import { ApplicationViewModule } from '@central-factory/applications/web-components/angular/application-view/application-view.module';
import { ApplicationsCarouselModule } from '@central-factory/applications/web-components/angular/applications-carousel/applications-carousel.module';
import { AvatarAppearancePortraitModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-portrait/avatar-appearance-portrait.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SidebarModule } from '@central-factory/web-components/angular/sidebar/sidebar.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AssistantAvatarModule } from './components/assistant-avatar/assistant-avatar.module';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { TopicFormComponent } from './components/topic-form/topic-form.component';
import { StartRoutingModule } from './start-routing.module';
import { StartScene } from './start.scene';

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
    StartRoutingModule,
    NgSelectModule,
    ApplicationIconModule,
    ApplicationHeaderModule,
    ApplicationShortcutModule,
    AvatarAppearancePortraitModule,
    AssistantAvatarModule,
  ],
  declarations: [StartScene, TopicCardComponent, TopicFormComponent],
  exports: [StartScene],
})
export class StartModule {}
