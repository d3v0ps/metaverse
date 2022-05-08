import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { ModelEnumsListComponent } from './model-enums-list.component';
import { ModelImportsListComponent } from './model-imports-list.component';
import { ModelRootsListComponent } from './model-roots-list.component';
import { ModelTypesListComponent } from './model-types-list.component';
import { PackageModelViewerComponent } from './package-model-viewer.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [
    ModelImportsListComponent,
    ModelRootsListComponent,
    ModelEnumsListComponent,
    ModelTypesListComponent,
    PackageModelViewerComponent,
  ],
  declarations: [
    ModelImportsListComponent,
    ModelRootsListComponent,
    ModelEnumsListComponent,
    ModelTypesListComponent,
    PackageModelViewerComponent,
  ],
  providers: [],
})
export class PackageModelViewerModule {}
