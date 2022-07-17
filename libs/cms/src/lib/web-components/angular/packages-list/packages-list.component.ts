import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Package } from '@central-factory/platforms/__generated__/models';

@Component({
  selector: 'cf-packages-list',
  template: `
    <div cfBlock="packages-list">
      <ng-container *ngFor="let pkg of packages">
        <div cfBlock="packages-list-item">
          <section cfElem="info">
            <section cfElem="name">
              <cf-typography (click)="onPackageCollapseClick(pkg)">
                <cf-svg-icon
                  src="assets/icons/mdi/chevron-{{
                    collapsedPackages[pkg.name] ? 'down' : 'up'
                  }}.svg"
                ></cf-svg-icon>
              </cf-typography>
              <cf-typography theme="secondary" (click)="onPackageClick(pkg)">
                <cf-svg-icon
                  src="assets/icons/fluent-icons/{{
                    pkg.project.projectType === 'library'
                      ? 'symbol-method'
                      : 'symbol-structure'
                  }}.svg"
                ></cf-svg-icon>
                {{ pkg.name | cfCase }}
              </cf-typography>
            </section>
          </section>
          <section elem="children" *ngIf="!collapsedPackages[pkg.name]">
            <div cfBlock="models">
              <section cfElem="header">
                <cf-typography (click)="onChildClick(pkg, 'models')">
                  <cf-svg-icon
                    src="assets/icons/mdi/chevron-{{
                      expandedChildren[pkg.name + '/models'] ? 'up' : 'down'
                    }}.svg"
                  ></cf-svg-icon>
                  <cf-svg-icon
                    src="assets/icons/fluent-icons/symbol-variable.svg"
                  ></cf-svg-icon>
                  Models ({{ pkg.models.length }})
                </cf-typography>
                <cf-typography
                  cfElem="create-icon"
                  [clickable]="true"
                  (click)="createModelClick.emit(pkg)"
                >
                  <cf-svg-icon src="assets/icons/mdi/plus.svg"></cf-svg-icon>
                </cf-typography>
              </section>
              <ng-container
                *ngIf="
                  pkg.models.length && expandedChildren[pkg.name + '/models']
                "
              >
                <div cfBlock="model" *ngFor="let model of pkg.models">
                  <cf-typography
                    cfElem="name"
                    [cfMod]="model.name === 'index' ? 'index' : undefined"
                    [clickable]="true"
                    (click)="modelClick.emit({ pkg, model })"
                  >
                    <cf-svg-icon
                      src="assets/icons/fluent-icons/symbol-{{
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
          cursor: pointer;
          display: flex;
        }
      }
      .models {
        padding-left: 1rem;
        &__header {
          cursor: pointer;
          justify-content: space-between;
        }
        &__create-icon {
          display: none;
          cursor: pointer;
        }
        &:hover {
          .models__create-icon {
            display: block;
          }
        }
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

      .models {
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
  @Output() packageClick = new EventEmitter<Package>();
  @Output() createModelClick = new EventEmitter<Package>();

  collapsedPackages: Record<string, boolean> = {};
  expandedChildren: Record<string, boolean> = {};

  onPackageCollapseClick(pkg: Package) {
    this.collapsedPackages[pkg.name] = !this.collapsedPackages[pkg.name];
  }

  onPackageClick(pkg: Package) {
    this.packageClick.emit(pkg);
  }

  onChildClick(pkg: Package, model: string) {
    this.expandedChildren[`${pkg.name}/${model}`] =
      !this.expandedChildren[`${pkg.name}/${model}`];
  }
}
