import { Component, Input } from '@angular/core';
import { Asset } from '@central-factory/core';

@Component({
  selector: 'cf-assets-grid',
  template: `
    <div block="assets-grid">
      <div
        block="assets-grid-item"
        *ngFor="let slot of slots; let i = index"
        [ngClass]="{
          'assets-grid-item--active': assets[i]?.id === activeAssetId
        }"
      >
        <ng-container *ngIf="assets[i] as asset; else empty">
          <img elem="image" [src]="asset.previewUrl" />
          <div elem="name">
            <span>{{ asset.name }}</span>
          </div>
        </ng-container>
        <ng-template #empty>
          <div elem="empty"></div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .assets-grid {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto auto auto;
        column-gap: 10px;
        row-gap: 15px;
      }

      .assets-grid-item {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 2px solid #303030;
        max-height: 140px;

        &--active {
          border-color: #d1d36f;
        }

        &__empty {
          height: 140px;
        }

        &__name {
          font-size: 1.2rem;
          font-weight: bold;
          text-align: center;
          /** position: relative; **/
          bottom: 30px;
          height: 36px;
          background: rgba(0, 0, 0, 0.6);
          span {
            padding: 0.25rem;
            width: 100%;
            left: 0;
            /** position: absolute; **/
          }
        }

        &__image {
          width: auto;
          height: calc(100% - 36px);
          object-fit: cover;
          border-radius: 10px;
        }
      }
    `,
  ],
})
export class AssetsGridComponent {
  @Input() assets!: Asset[];

  activeAssetId = '1';

  slots = new Array(16).fill(null);
}
