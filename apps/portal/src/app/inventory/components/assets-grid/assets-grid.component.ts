import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Asset } from '@central-factory/core';

@Component({
  selector: 'cf-assets-grid',
  template: `
    <div block="assets-grid">
      <div
        block="assets-grid-item"
        *ngFor="let slot of slots; let i = index"
        [ngClass]="{
          'assets-grid-item--active':
            assets[i] && assets[i]?.id === activeAsset?.id
        }"
        [mod]="{
          'is-filled': assets[i] ? true : false
        }"
        (click)="assetClick.emit(assets[i])"
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
      $grid-xl-size: 180px;
      $grid-l-size: 140px;
      $grid-m-size: 140px;
      $grid-s-size: 140px;
      $grid-size: $grid-xl-size;

      .assets-grid {
        display: grid;
        grid-template-columns: $grid-size $grid-size $grid-size $grid-size;
        grid-template-rows: $grid-size $grid-size $grid-size $grid-size;
        column-gap: 10px;
        row-gap: 15px;
      }

      .assets-grid-item {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 5px solid #303030;
        max-height: $grid-size;

        &--is-filled {
          cursor: pointer;
        }

        &--active {
          border-color: #d1d36f;
        }

        &__empty {
          height: $grid-size;
          background: url('https://www.toptal.com/designers/subtlepatterns/patterns/dark-honeycomb.png');
          background: url('https://www.toptal.com/designers/subtlepatterns/patterns/mosaic.png');
        }

        &__name {
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          /** position: relative; **/
          bottom: 30px;
          height: 36px;
          background: rgba(0, 0, 0, 0.6);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          span {
            padding: 0.25rem;
            width: 100%;
            left: 0;
            /** position: absolute; **/
          }
        }

        &__image {
          width: 100%;
          height: calc(100% - 36px);
          object-fit: cover;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          /** border-radius: 10px; **/
        }
      }

      @media (max-width: 1200px) {
        .assets-grid {
          grid-template-columns: $grid-l-size $grid-l-size $grid-l-size;
          grid-template-rows: $grid-l-size $grid-l-size $grid-l-size;
        }
        .assets-grid-item {
          max-height: $grid-l-size;
          &__empty {
            height: $grid-l-size;
          }
        }
      }

      @media (max-width: 960px) {
        .assets-grid {
          grid-template-columns: $grid-l-size $grid-l-size;
          grid-template-rows: $grid-l-size $grid-l-size;
        }
        .assets-grid-item {
          max-height: $grid-l-size;
          &__empty {
            height: $grid-l-size;
          }
        }
      }

      @media (max-width: 860px) {
        .assets-grid {
          grid-template-columns: $grid-l-size;
          grid-template-rows: $grid-l-size;
        }
        .assets-grid-item {
          max-height: $grid-l-size;
          &__empty {
            height: $grid-l-size;
          }
        }
      }
    `,
  ],
})
export class AssetsGridComponent {
  @Input() assets!: Asset[];
  @Input() activeAsset?: Asset;

  @Output() assetClick = new EventEmitter<Asset>();

  slots = new Array(16).fill(null);
}
