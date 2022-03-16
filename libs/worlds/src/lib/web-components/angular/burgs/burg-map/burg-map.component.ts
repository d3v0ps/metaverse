import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Burg,
  FantasyMapGeneratorMap,
} from '@central-factory/worlds/models/fmg-map';

@Component({
  selector: 'cf-burg-map',
  template: `
    <div class="burg-map">
      <iframe width="100%" height="100%" [src]="burgUrl"></iframe>
    </div>
  `,
})
export class BurgMapComponent {
  @Input() world?: FantasyMapGeneratorMap;
  @Input() burg?: Burg;

  burgUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    'https://watabou.github.io/city-generator/?size=34&seed=4405163980001&name=Yvanethlond&population=12644&greens=0&farms=1&citadel=1&urban_castle=0&plaza=0&temple=0&walls=1&shantytown=0&coast=0&river=1&gates=-1'
  );

  constructor(private domSanitizer: DomSanitizer) {}
}
