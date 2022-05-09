import { NgModule } from '@angular/core';
import { EssentialsModule } from '../essentials.module';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [MarkdownComponent],
  declarations: [MarkdownComponent],
  providers: [],
})
export class MarkdownModule {}
