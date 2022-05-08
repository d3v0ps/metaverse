import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Package } from '@central-factory/cms/states/packages.state';

@Component({
  selector: 'cf-packages-list',
  template: `
    <div cfBlock="packages-list">
      <ng-container *ngFor="let pkg of packages">
        <div cfBlock="packages-list-item">
          <section cfElem="info">
            <section cfElem="name" (click)="onPackageClick(pkg)">
              <cf-typography>
                <cf-svg-icon
                  src="assets/icons/mdi/chevron-{{
                    collapsedPackages[pkg.name] ? 'down' : 'up'
                  }}.svg"
                ></cf-svg-icon>
              </cf-typography>
              <cf-typography theme="secondary">
                <cf-svg-icon
                  src="assets/icons/codicons/{{
                    pkg.project.projectType === 'library'
                      ? 'symbol-method'
                      : 'symbol-structure'
                  }}.svg"
                ></cf-svg-icon>
                {{ pkg.name | cfCase }}
              </cf-typography>
            </section>
            <cf-typography [clickable]="true">
              <cf-svg-icon src="assets/icons/mdi/plus.svg"></cf-svg-icon>
            </cf-typography>
          </section>
          <section elem="children" *ngIf="!collapsedPackages[pkg.name]">
            <div cfBlock="models" *ngIf="pkg.models.length">
              <cf-typography (click)="onChildClick(pkg, 'models')">
                <cf-svg-icon
                  src="assets/icons/mdi/chevron-{{
                    expandedChildren[pkg.name + '/models'] ? 'up' : 'down'
                  }}.svg"
                ></cf-svg-icon>
                <cf-svg-icon
                  src="assets/icons/codicons/symbol-variable.svg"
                ></cf-svg-icon>
                Models ({{ pkg.models.length }})
              </cf-typography>
              <ng-container *ngIf="expandedChildren[pkg.name + '/models']">
                <div cfBlock="model" *ngFor="let model of pkg.models">
                  <cf-typography
                    cfElem="name"
                    [cfMod]="model.name === 'index' ? 'index' : undefined"
                    [clickable]="true"
                    (click)="modelClick.emit({ pkg, model })"
                  >
                    <cf-svg-icon
                      src="assets/icons/codicons/symbol-{{
                        model.name === 'index' ? 'ruler' : 'misc'
                      }}.svg"
                    ></cf-svg-icon>
                    {{ model.name | cfCase }}
                  </cf-typography>
                </div>
              </ng-container>
            </div>
          </section>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .packages-list-item {
        &__info {
          display: flex;
          justify-content: space-between;
        }
        &__name {
          display: flex;
        }
      }
      .models {
        padding-left: 1rem;
      }
      .model {
        padding-left: 1rem;
        cursor: pointer;
        .model__name {
          color: var(--color-syntax-file) !important;
          &--index {
            color: var(--color-syntax-ignore) !important;
          }
        }
      }
    `,
  ],
})
export class PackagesListComponent {
  @Input() packages: any[] = [];
  @Output() modelClick = new EventEmitter<{
    pkg: any;
    model: string;
  }>();

  collapsedPackages: Record<string, boolean> = {};
  expandedChildren: Record<string, boolean> = {};

  onPackageClick(pkg: Package) {
    this.collapsedPackages[pkg.name] = !this.collapsedPackages[pkg.name];
  }

  onChildClick(pkg: Package, model: string) {
    this.expandedChildren[`${pkg.name}/${model}`] =
      !this.expandedChildren[`${pkg.name}/${model}`];
  }
}
