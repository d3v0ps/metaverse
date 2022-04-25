import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationsCarouselModule } from '@central-factory/applications/web-components/angular/applications-carousel/applications-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { TopicApplicationsComponent } from './topic-applications.component';

@NgModule({
  declarations: [TopicApplicationsComponent],
  imports: [CommonModule, BemModule, ApplicationsCarouselModule],
  exports: [TopicApplicationsComponent],
})
export class TopicApplicationsModule {}
