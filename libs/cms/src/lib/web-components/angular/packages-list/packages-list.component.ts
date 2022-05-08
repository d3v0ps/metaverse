import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cf-packages-list',
  template: `
    <div cfBlock="packages-list">
      <ng-container *ngFor="let pkg of packages">
        <div cfBlock="packages-list-item">
          <section cfElem="info">
            <cf-typography>
              <cf-svg-icon
                src="assets/icons/mdi/{{
                  pkg.project.projectType === 'library'
                    ? 'bookmark-box-multiple'
                    : pkg.project.projectType
                }}.svg"
              ></cf-svg-icon>
              {{ pkg.name }}
            </cf-typography>
            <cf-typography [clickable]="true">
              <cf-svg-icon src="assets/icons/mdi/plus.svg"></cf-svg-icon>
            </cf-typography>
          </section>
          <section elem="children">
            <div cfBlock="model" *ngFor="let model of pkg.models">
              <cf-typography
                [clickable]="true"
                (click)="modelClick.emit({ pkg, model })"
              >
                <cf-svg-icon src="assets/icons/mdi/code-tags.svg"></cf-svg-icon>
                {{ model }}
              </cf-typography>
            </div>
          </section>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .packages-list-item__info {
        display: flex;
        justify-content: space-between;
      }
      .model {
        padding-left: 1rem;
        cursor: pointer;
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
}
