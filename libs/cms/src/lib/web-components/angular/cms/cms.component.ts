import { Component, ViewChild } from '@angular/core';
import {
  ImportToken,
  Package,
} from '@central-factory/platforms/__generated__/models';
import { WindowComponent } from '@central-factory/web-components/angular/window/window.component';
import { camel } from 'case';
import { share } from 'rxjs';
import { PackagesState } from '../../../states/packages.state';

@Component({
  selector: 'cf-cms',
  template: `
    <div cfBlock="cms" *ngIf="application$ | async as application">
      <div cfElem="packages-list">
        <cf-typography
          style="h5"
          [clickable]="true"
          (click)="onApplicationClick()"
        >
          <cf-svg-icon src="assets/icons/codicons/repo.svg"></cf-svg-icon>
          {{ application.package?.name }}
        </cf-typography>

        <div>
          <cf-button text="Terraform" icon="assets/icons/mdi/plus.svg">
          </cf-button>
          <cf-button text="Avatars Directory" icon="assets/icons/mdi/plus.svg">
          </cf-button>
        </div>

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
        <ng-container *ngIf="!data.selectedPackage && application">
          <cf-markdown [content]="application.readme"></cf-markdown>
        </ng-container>
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

  application$ = this.packagesState.application$.pipe(share());
  packages$ = this.packagesState.packages$.pipe(share());
  selectedPackage$ = this.packagesState.selectedPackage$.pipe(share());
  selectedModel$ = this.packagesState.selectedModel$.pipe(share());
  selectedType$ = this.packagesState.selectedType$.pipe(share());

  constructor(private packagesState: PackagesState) {}

  onApplicationClick() {
    const application = this.packagesState.application$.value;

    if (application) {
      this.packagesState.selectApplication(application);
    }
  }

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
