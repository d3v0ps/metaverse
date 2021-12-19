import { Component, Input } from '@angular/core';
import { Asset } from '../../../domain/models/asset';

@Component({
  selector: 'cf-asset-detail',
  template: `
    <div block="asset-detail" *ngIf="asset">
      <h3 elem="name">{{ asset.name }}</h3>
      <img elem="image" [src]="asset.previewUrl" alt="" />
      <div elem="info">
        <p>{{ asset.description }}</p>
        <table block="asset-stats">
          <tbody>
            <tr elem="row">
              <td elem="label">Model</td>
              <td elem="value">{{ asset.model }}</td>
            </tr>
            <tr elem="row">
              <td elem="label">Producer</td>
              <td elem="value">{{ asset.producer }}</td>
            </tr>
            <tr elem="row">
              <td elem="label">Current Value</td>
              <td
                elem="value"
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
            <tr elem="row">
              <td elem="label">Purchase Value</td>
              <td elem="value">{{ asset.purchaseValue | currency }}</td>
            </tr>
            <tr elem="row">
              <td elem="label">Purchase Date</td>
              <td elem="value">{{ asset.purchaseDate | date }}</td>
            </tr>
            <tr elem="row">
              <td elem="label">URL</td>
              <td elem="value">
                <a [href]="asset.url" target="_blank">
                  <cf-svg-icon
                    src="assets/icons/mdi/link.svg"
                    elem="icon"
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
