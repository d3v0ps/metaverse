import { Component } from '@angular/core';
import { share } from 'rxjs';
import { PackagesState } from '../../../states/packages.state';

@Component({
  selector: 'cf-cms',
  template: `
    <div cfBlock="cms">
      <div cfElem="packages-list">
        <cf-packages-list
          *ngIf="packages$ | async as packages"
          [packages]="packages"
          (modelClick)="onPackageModelClick($event)"
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
        <cf-package-model-viewer
          *ngIf="data.selectedModel && data.selectedPackage"
          [model]="data.selectedModel"
          [package]="data.selectedPackage"
        >
        </cf-package-model-viewer>
      </div>
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
  packages$ = this.packagesState.packages$.pipe(share());
  selectedPackage$ = this.packagesState.selectedPackage$.pipe(share());
  selectedModel$ = this.packagesState.selectedModel$.pipe(share());

  constructor(private packagesState: PackagesState) {}

  onPackageModelClick({ pkg, model }: any) {
    this.packagesState.selectModel(pkg.name, model.file);
  }
}
