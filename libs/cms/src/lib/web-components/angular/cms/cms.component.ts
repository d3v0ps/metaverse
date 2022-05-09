import { Component, ViewChild } from '@angular/core';
import { ImportToken } from '@central-factory/platforms/__generated__/models';
import { WindowComponent } from '@central-factory/web-components/angular/window/window.component';
import { camel } from 'case';
import { share } from 'rxjs';
import { Package, PackagesState } from '../../../states/packages.state';

@Component({
  selector: 'cf-cms',
  template: `
    <div cfBlock="cms">
      <div cfElem="packages-list">
        <cf-packages-list
          *ngIf="packages$ | async as packages"
          [packages]="packages"
          (modelClick)="onPackageModelClick($event)"
          (packageClick)="onPackageClick($event)"
          (createModelClick)="onCreateModelClick($event)"
        >
        </cf-packages-list>
      </div>
      <div
        cfElem="model-editor"
        *ngIf="{
          selectedModel: selectedModel$ | async,
          selectedPackage: selectedPackage$ | async,
          selectedType: selectedType$ | async
        } as data"
      >
        <ng-container *ngIf="data.selectedPackage && !data.selectedModel">
          <cf-markdown [content]="data.selectedPackage.readme"></cf-markdown>
        </ng-container>
        <cf-package-model-viewer
          *ngIf="data.selectedModel && data.selectedPackage"
          [model]="data.selectedModel"
          [package]="data.selectedPackage"
          [type]="data.selectedType || undefined"
          (importClick)="onImportClick($event)"
          (rootClick)="onTypeClick($event)"
          (typeClick)="onTypeClick($event)"
        >
        </cf-package-model-viewer>
      </div>
      <cf-window #addModelWindow>
        <div class="window-body__content">
          <label>Add Package</label>
          <input
            type="text"
            [value]="(selectedPackage$ | async)?.name"
            placeholder="Model name"
            #modelName
          />
          <label>Model</label>
          <input type="text" placeholder="Model name" #modelName />
        </div>
      </cf-window>
    </div>
  `,
  styles: [
    `
      .cms {
        height: 100%;
        display: flex;
      }
      .cms__packages-list {
        height: 100%;
        width: 40vw;
        overflow-y: auto;
      }
      .cms__model-editor {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        padding: 0.2rem 0.5rem;
      }
    `,
  ],
})
export class CMSComponent {
  @ViewChild('addModelWindow', { static: true })
  addModelWindow?: WindowComponent;

  packages$ = this.packagesState.packages$.pipe(share());
  selectedPackage$ = this.packagesState.selectedPackage$.pipe(share());
  selectedModel$ = this.packagesState.selectedModel$.pipe(share());
  selectedType$ = this.packagesState.selectedType$.pipe(share());

  constructor(private packagesState: PackagesState) {}

  onPackageClick(pkg: Package) {
    this.packagesState.selectPackage(pkg.name);
  }

  onPackageModelClick({ pkg, model }: any) {
    this.packagesState.selectModel(pkg.name, model.file);
  }

  onCreateModelClick(pkg: Package) {
    this.packagesState.selectPackage(pkg.name);
    this.addModelWindow?.show();
  }

  onImportClick(token: ImportToken) {
    this.onTypeClick(token.name);
  }

  onTypeClick(value: string) {
    const types = value
      .replace('[]', '')
      .replace('&', '')
      .replace('|', '')
      .split(' ');

    const typeName = camel(types[0]);

    if (!typeName) {
      throw new Error(`No type found in ${value}`);
    }
    this.packagesState.selectType(typeName);
  }
}
