import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FantasyMapGeneratorMap } from '@central-factory/worlds/models/fmg-map';

@Component({
  selector: 'cf-world-map',
  template: `
    <div class="world-map">
      <iframe width="100%" height="100%" [src]="worldUrl"></iframe>
    </div>
  `,
})
export class WorldMapComponent {
  @Input() world?: FantasyMapGeneratorMap;

  worldUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    'http://aitorllamas.com/Fantasy-Map-Generator/?seed=440516398&hideEditor=true&hideWelcomeMessage=true&presetStyle=cyberpunk&preset=political'
  );

  constructor(private domSanitizer: DomSanitizer) {}
}
