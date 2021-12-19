import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Asset } from '../../../domain/models/asset';

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
})
export class AssetsGridComponent {
  static readonly DEFAULT_SLOTS_AMOUNT = 16;

  @Input() assets!: Asset[];
  @Input() activeAsset?: Asset;
  @Input() slotsAmount = AssetsGridComponent.DEFAULT_SLOTS_AMOUNT;

  @Output() assetClick = new EventEmitter<Asset>();

  slots = new Array(this.slotsAmount).fill(null);
}
