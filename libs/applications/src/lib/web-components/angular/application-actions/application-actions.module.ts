import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ApplicationShortcutModule } from '../application-shortcut/application-shortcut.module';
import { ApplicationActionsComponent } from './application-actions.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule, ApplicationShortcutModule],
  declarations: [ApplicationActionsComponent],
  exports: [ApplicationActionsComponent],
})
export class ApplicationActionsModule {}
