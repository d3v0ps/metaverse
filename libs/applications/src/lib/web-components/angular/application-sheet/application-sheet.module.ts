import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ApplicationCardModule } from '../application-card/application-card.module';
import { ApplicationShortcutModule } from '../application-shortcut/application-shortcut.module';
import { ApplicationSheetComponent } from './application-sheet.component';

@NgModule({
  declarations: [ApplicationSheetComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    DragDropModule,
    ApplicationCardModule,
    ApplicationShortcutModule,
  ],
  exports: [ApplicationSheetComponent],
})
export class ApplicationSheetModule {}
