import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TopicApplicationsModule } from '../topic-applications/topic-applications.module';
import { TopicBackgroundModule } from '../topic-background/topic-background.module';
import { TopicCategoriesModule } from '../topic-categories/topic-categories.module';
import { TopicHeaderModule } from '../topic-header/topic-header.module';
import { TopicMediaModule } from '../topic-media/topic-media.module';
import { TopicShortcutsModule } from '../topic-shortcuts/topic-shortcuts.module';
import { TopicCardComponent } from './topic-card.component';

@NgModule({
  declarations: [TopicCardComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    TopicHeaderModule,
    TopicBackgroundModule,
    TopicCategoriesModule,
    TopicMediaModule,
    TopicShortcutsModule,
    TopicApplicationsModule,
  ],
  exports: [TopicCardComponent],
})
export class TopicCardModule {}
