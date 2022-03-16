import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarsCarouselModule } from '@central-factory/avatars/web-components/angular/avatars-carousel/avatars-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AvatarsListComponent } from './avatars-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BemModule,
    NgSelectModule,
    AvatarsCarouselModule,
  ],
  declarations: [AvatarsListComponent],
  exports: [AvatarsListComponent],
})
export class AvatarsListModule {}
