import { Component, ViewChild } from '@angular/core';
import { WindowComponent } from '@central-factory/web-components/angular/window/window.component';
import { camel } from 'case';
import { share } from 'rxjs';
import { Model, Package, PackagesState } from '../../../states/packages.state';

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
          selectedPackage: selectedPackage$ | async
        } as data"
      >
        <ng-container *ngIf="data.selectedPackage && !data.selectedModel">
          <cf-markdown [content]="data.selectedPackage.readme"></cf-markdown>
        </ng-container>
        <cf-package-model-viewer
          *ngIf="data.selectedModel && data.selectedPackage"
          [model]="data.selectedModel"
          [package]="data.selectedPackage"
          (importClick)="onImportClick($event)"
          (rootClick)="onRootClick($event)"
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

  onImportClick({ key, value }: any) {
    const pkg = this.packagesState.packages$.value.find((pkg) => {
      const match = pkg.models.some(
        (model) => model.types && key in model.types
      );
      return match;
    });

    if (!pkg) {
      return;
    }

    const model = pkg.models.find(
      (model) => model.types && key in model.types
    ) as Model;

    this.packagesState.selectModel(pkg?.name, model.name);
  }

  onRootClick(value: string) {
    const pkg = this.packagesState.packages$.value.find((pkg) => {
      const match = pkg.models.some(
        (model) => model.types && value in model.types
      );
      return match;
    });

    if (!pkg) {
      return;
    }

    const model = pkg.models.find(
      (model) => model.types && value in model.types
    ) as Model;

    this.packagesState.selectModel(pkg?.name, model.name);
  }

  onTypeClick(value: string) {
    const types = value
      .replace('[]', '')
      .replace('&', '')
      .replace('|', '')
      .split(' ');

    const type = camel(types[0]);

    if (!type) {
      throw new Error(`No type found in ${value}`);
    }

    const pkg = this.packagesState.packages$.value.find((pkg) =>
      pkg.models.some((model) => model.types && type in model.types)
    );

    if (!pkg) {
      throw new Error(`No pkg found for type ${type}`);
    }

    const model = pkg.models.find(
      (model) => model.types && type in model.types
    );

    if (!model) {
      throw new Error(`No model found for type ${type}`);
    }

    this.packagesState.selectModel(pkg.name, model.name);
  }
}
