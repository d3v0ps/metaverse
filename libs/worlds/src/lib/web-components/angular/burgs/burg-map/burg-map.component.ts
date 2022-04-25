import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Burg } from '@central-factory/worlds/models/fmg-map';
import { World } from '@central-factory/worlds/models/world';

@Component({
  selector: 'cf-burg-map',
  template: `
    <div cfBlock="burg-map" *ngIf="world">
      <ng-container [ngSwitch]="world.kind">
        <ng-container *ngSwitchCase="'digital'">
          <iframe
            *ngIf="burgUrl && world.map"
            width="100%"
            height="100%"
            [src]="burgUrl"
            (load)="mapLoad.emit()"
          ></iframe>
          <ng-container *ngIf="!world.map">
            <p>Sorry, this burg is not yet available for viewing.</p>
          </ng-container>
        </ng-container>
        <ng-container *ngSwitchCase="'analog'"> Analog Burg </ng-container>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .burg-map {
        iframe {
          box-shadow: var(--component-scene-content-shadow-outset),
            inset var(--component-scene-content-shadow-inset-primary),
            inset var(--component-scene-content-shadow-inset-secondary);
          border-radius: 20px;
        }
      }
    `,
  ],
})
export class BurgMapComponent {
  @Input() world?: World;
  @Input() set burg(burg: Burg | undefined) {
    if (!burg || !this.world) {
      return;
    }

    const sizeRaw =
      2.13 *
      Math.pow(
        ((burg.population || 0) *
          (this.world.map?.settings.populationRate || 0)) /
          7,
        0.385
      );
    const { i = 0, name = '', population = 0 } = burg;
    const size = Math.min(Math.max(Math.ceil(sizeRaw), 6), 100);
    const seed = this.getBurgSeed(burg, this.world);
    const river = this.world.map?.cells.cells[burg.cell || 0].r ? 1 : 0;
    const coast = (burg.port || 0) > 0;
    const citadel = burg.citadel || 0;
    const each = (n: number) => (i: number) => i % n === 0;
    const urban_castle = +(citadel && each(2)(i));
    const hub = this.world.map
      ? this.world.map.cells.cells[burg.cell || 0].road > 50
      : false;
    const walls = burg.walls || 0;
    const plaza = burg.plaza || 0;
    const temple = burg.temple || 0;
    const shantytown = burg.shanty || 0;
    const biome = this.world.map?.cells.cells[burg.cell || 0].biome || 0;
    const arableBiomes = river ? [1, 2, 3, 4, 5, 6, 7, 8] : [5, 6, 7, 8];
    const farms = +arableBiomes.includes(biome);
    // const sea = coast && this.world.map.cells.cells[burg.cell || 0].haven ? getSeaDirections(cell) : null;

    const parameters = {
      name,
      population,
      size,
      seed,
      river,
      coast,
      farms,
      citadel,
      urban_castle,
      hub,
      plaza,
      temple,
      walls,
      shantytown,
      gates: -1,
    };

    const url = new URL('https://watabou.github.io/city-generator');
    url.search = new URLSearchParams(parameters as any).toString();
    // if (sea) url.searchParams.append("sea", sea);

    this.burgUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      url.toString()
    );
  }

  @Output() mapLoad = new EventEmitter<void>();

  burgUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    'https://watabou.github.io/city-generator/?size=34&seed=4405163980001&name=Yvanethlond&population=12644&greens=0&farms=1&citadel=1&urban_castle=0&plaza=0&temple=0&walls=1&shantytown=0&coast=0&river=1&gates=-1'
  );

  constructor(private domSanitizer: DomSanitizer) {}

  private getBurgSeed(burg: Burg, world: World) {
    return (
      burg.MFCG ||
      Number(`${world.map?.info.seed}${String(burg.i).padStart(4, '0')}`)
    );
  }
}
