import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ApplicationDescriptionModule } from '../application-description/application-description.module';
import { ApplicationFooterModule } from '../application-footer/application-footer.module';
import { ApplicationHeaderModule } from '../application-header/application-header.module';
import { ApplicationIconModule } from '../application-icon/application-icon.module';
import { ApplicationInfoModule } from '../application-info/application-info.module';
import { ApplicationCardComponent } from './application-card.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    ApplicationIconModule,
    ApplicationInfoModule,
    ApplicationHeaderModule,
    ApplicationDescriptionModule,
    ApplicationFooterModule,
  ],
  declarations: [ApplicationCardComponent],
  exports: [ApplicationCardComponent],
})
export class ApplicationCardModule {}
