import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
