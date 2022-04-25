import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
