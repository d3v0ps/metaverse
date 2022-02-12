import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { MediaModule } from '@central-factory/web-components/angular/media/media.module';
import { TopicMediaComponent } from './topic-media.component';

@NgModule({
  declarations: [TopicMediaComponent],
  imports: [CommonModule, BemModule, SvgIconModule, MediaModule],
  exports: [TopicMediaComponent],
})
export class TopicMediaModule {}
