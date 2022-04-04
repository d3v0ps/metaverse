import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { World } from '@central-factory/worlds/models/world';

@Component({
  selector: 'cf-world-map',
  template: `
    <div class="world-map" *ngIf="worldUrl">
      <iframe
        width="100%"
        height="100%"
        [src]="worldUrl"
        (load)="mapLoad.emit()"
      ></iframe>
    </div>
  `,
})
export class WorldMapComponent {
  @Input() set world(world: World | undefined) {
    if (!world) {
      return;
    }

    const mapStyle =
      world.eras?.find((era) => era.name === world.map.settings.options.era)
        ?.mapStyle || 'ancient';

    const url = `http://aitorllamas.com/Fantasy-Map-Generator/?seed=${world.map.info.seed}&hideEditor=true&hideWelcomeMessage=true&presetStyle=${mapStyle}&preset=political`;

    this.worldUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  worldUrl?: SafeResourceUrl;
  // worldUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
  //   'http://aitorllamas.com/Fantasy-Map-Generator/?seed=440516398&hideEditor=true&hideWelcomeMessage=true&presetStyle=cyberpunk&preset=political'
  // );

  @Output() mapLoad = new EventEmitter<void>();

  constructor(private domSanitizer: DomSanitizer) {}
}
