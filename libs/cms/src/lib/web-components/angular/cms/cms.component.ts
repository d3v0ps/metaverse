import { Component } from '@angular/core';
import { share } from 'rxjs';
import { PackagesState } from '../states/packages.state';

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
      <div cfElem="model-editor">
        <ng-container *ngIf="selectedModel$ | async as selectedModel">
          <div cfBlock="header">
            <cf-typography theme="primary" type="h2">
              {{ selectedModel.name | cfCase }}
            </cf-typography>
          </div>
          <table>
            <tr *ngIf="selectedModel.imports">
              <th>Imports</th>
              <th>
                <ng-container
                  *ngFor="let import of selectedModel.imports | keyvalue"
                >
                  <cf-typography>
                    {{ import.key | cfCase }}:
                    {{ import.value | json }}
                  </cf-typography>
                </ng-container>
              </th>
            </tr>
            <tr *ngIf="selectedModel.roots">
              <th>Roots</th>
              <th>
                <div *ngFor="let root of selectedModel.roots">
                  {{ root | cfCase }}
                </div>
              </th>
            </tr>
            <tr *ngIf="selectedModel.enums">
              <th>Enums</th>
              <th>
                <ng-container
                  *ngFor="let enum of selectedModel.enums | keyvalue"
                >
                  {{ enum.key | cfCase }}
                  <ng-container *ngFor="let prop of enum.value | keyvalue">
                    <div cfBlock="model-prop">
                      <pre>{{ prop.key }}: {{ prop.value | json }}</pre>
                    </div>
                  </ng-container>
                </ng-container>
              </th>
            </tr>
            <tr *ngIf="selectedModel.types">
              <th>Types</th>
              <th>
                <ng-container
                  *ngFor="let type of selectedModel.types | keyvalue"
                >
                  {{ type.key | cfCase }}
                  <ng-container
                    *ngIf="isTypeDefinition(type.value); else propsTemplate"
                  >
                    <pre>{{ type.value['type'] }}</pre>
                  </ng-container>
                  <ng-template #propsTemplate>
                    <ng-container *ngFor="let prop of type.value | keyvalue">
                      <div cfBlock="model-prop">
                        <pre>{{ prop.key }}: {{ prop.value.type }}</pre>
                      </div>
                    </ng-container>
                  </ng-template>
                </ng-container>
              </th>
            </tr>
          </table>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      th {
        text-align: left;
        vertical-align: top;
        padding: 0 0.5rem 0.7rem;
      }

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
        .header {
          padding: 0 0.5rem;
        }
      }

      .model-prop {
        padding-left: 1rem;
      }
    `,
  ],
})
export class CMSComponent {
  packages$ = this.packagesState.packages$.pipe(share());
  selectedModel$ = this.packagesState.selectedModel$.pipe(share());

  constructor(private packagesState: PackagesState) {}

  onPackageModelClick({ pkg, model }: any) {
    this.packagesState.selectModel(pkg.name, model);
  }

  isTypeDefinition(data: any) {
    return data.type && Object.keys(data).length === 1;
  }
}
