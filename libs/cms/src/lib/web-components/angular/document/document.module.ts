import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { DocumentFormComponent } from './document-form.component';

import { DocumentComponent } from './document.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [DocumentComponent, DocumentFormComponent],
  declarations: [DocumentComponent, DocumentFormComponent],
  providers: [],
})
export class DocumentModule {}
