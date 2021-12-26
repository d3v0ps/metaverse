import { Component, Input } from '@angular/core';
import type { Asset } from '../../../models/asset';

@Component({
  selector: 'cf-asset-detail',
  template: `
    <div cfBlock="asset-detail" *ngIf="asset">
      <h3 cfElem="name">{{ asset.name }}</h3>
      <img cfElem="image" [src]="asset.previewUrl" alt="" />
      <div cfElem="info">
        <p>{{ asset.description }}</p>
        <table cfBlock="asset-stats">
          <tbody>
            <tr cfElem="row">
              <td cfElem="label">Model</td>
              <td cfElem="value">{{ asset.model }}</td>
            </tr>
            <tr cfElem="row">
              <td cfElem="label">Producer</td>
              <td cfElem="value">{{ asset.producer }}</td>
            </tr>
            <tr cfElem="row">
              <td cfElem="label">Current Value</td>
              <td
                cfElem="value"
                [ngClass]="{
                  'asset-stats__value--negative':
                    asset.currentValue < asset.purchaseValue,
                  'asset-stats__value--positive':
                    asset.currentValue > asset.purchaseValue
                }"
              >
                {{ asset.currentValue | currency }}
              </td>
            </tr>
            <tr cfElem="row">
              <td cfElem="label">Purchase Value</td>
              <td cfElem="value">{{ asset.purchaseValue | currency }}</td>
            </tr>
            <tr cfElem="row">
              <td cfElem="label">Purchase Date</td>
              <td cfElem="value">{{ asset.purchaseDate | date }}</td>
            </tr>
            <tr cfElem="row">
              <td cfElem="label">URL</td>
              <td cfElem="value">
                <a [href]="asset.url" target="_blank">
                  <cf-svg-icon
                    src="assets/icons/mdi/link.svg"
                    cfElem="icon"
                    [svgClass]="'icon__svg'"
                  ></cf-svg-icon>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class AssetDetailComponent {
  @Input() asset!: Asset;
}
