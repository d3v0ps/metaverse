import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationShortcutModule } from '@central-factory/applications/web-components/angular/application-shortcut/application-shortcut.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { TopicShortcutsComponent } from './topic-shortcuts.component';

@NgModule({
  declarations: [TopicShortcutsComponent],
  exports: [TopicShortcutsComponent],
  imports: [CommonModule, BemModule, ApplicationShortcutModule],
})
export class TopicShortcutsModule {}
