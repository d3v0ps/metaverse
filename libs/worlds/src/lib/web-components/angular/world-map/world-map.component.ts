import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Burg, World } from '@central-factory/worlds/__generated__/models';

@Component({
  selector: 'cf-world-map',
  template: `
    <div cfBlock="world-map" *ngIf="world">
      <ng-container *ngIf="!world.map">
        <p>Sorry, this world is not yet available for viewing.</p>
      </ng-container>
      <ng-container [ngSwitch]="world.kind">
        <ng-container *ngSwitchCase="'digital'">
          <iframe
            *ngIf="worldUrl && world.map"
            width="100%"
            height="100%"
            [src]="worldUrl"
            (load)="mapLoad.emit()"
          ></iframe>
        </ng-container>
        <ng-container *ngSwitchCase="'analog'">
          <iframe
            *ngIf="worldUrl && world.map"
            width="100%"
            height="100%"
            [src]="worldUrl"
            (load)="mapLoad.emit()"
          ></iframe>
        </ng-container>
      </ng-container>
    </div>
  `,
})
export class WorldMapComponent {
  @Input() set world(world: World | undefined) {
    this._world = world;

    if (this.world && this.burg) {
      this.renderWorldMap(this.world, this.burg);
    }
  }

  get world(): World | undefined {
    return this._world;
  }

  worldUrl?: SafeResourceUrl;

  @Input() set burg(burg: Burg | undefined) {
    this._burg = burg;
    if (this.world && this.burg) {
      this.renderWorldMap(this.world, this.burg);
    }
  }

  get burg(): Burg | undefined {
    return this._burg;
  }

  @Input() preset = 'political';

  @Output() mapLoad = new EventEmitter<void>();

  private _world?: World;
  private _burg?: Burg;

  constructor(private domSanitizer: DomSanitizer) {}

  private renderWorldMap(world: World, location: Burg) {
    if (world.kind === 'digital') {
      this.renderDigitalWorldMap(world);
    } else {
      this.renderAnalogWorldMap(world, location);
    }
  }

  private renderAnalogWorldMap(world: World, burg: Burg) {
    this.worldUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${burg?.x},${burg?.y}&t=&z=5&ie=UTF8&iwloc=&output=embed`
    );
  }

  private renderDigitalWorldMap(world: World) {
    const mapStyle =
      world.eras?.find((era) => era.name === world.map?.settings.options.era)
        ?.mapStyle || 'ancient';

    const protocol =
      document.URL.substring(0, 5) == 'http:' ? 'http:' : 'https:';
    const url = `${protocol}//aitorllamas.com/Fantasy-Map-Generator/?options=default&maplink=${protocol}//aitorllamas.com/metaverse/apps/portal/assets/worlds/${
      world.id
    }.map&burg=${
      this.burg?.i || 0
    }&hideEditor=true&hideWelcomeMessage=true&presetStyle=${mapStyle}&preset=${
      this.preset
    }`;
    // NOTE: Just in case something stops working due to cache, we can use this:
    // const url = `${protocol}//aitorllamas.com/Fantasy-Map-Generator/?seed=${
    //   world.map?.info.seed
    // }&burg=${
    //   this.burg?.i || 0
    // }&hideEditor=true&hideWelcomeMessage=true&presetStyle=${mapStyle}&preset=${
    //   this.preset
    // }`;

    this.worldUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
