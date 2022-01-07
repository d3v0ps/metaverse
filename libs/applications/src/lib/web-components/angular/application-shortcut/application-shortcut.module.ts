import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ApplicationShortcutComponent } from './application-shortcut.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule, RouterModule],
  declarations: [ApplicationShortcutComponent],
  exports: [ApplicationShortcutComponent],
})
export class ApplicationShortcutModule {}
