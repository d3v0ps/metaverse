/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Attribute,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';
import { BemService } from './bem.service';
import { BlockDirective } from './block.directive';

@Directive({
  selector: '[cfElem]',
})
export class ElemDirective implements OnChanges {
  public element: ElementRef;
  public renderer: Renderer2;
  public blockName: string;
  public name: string;
  @Input() public cfMod: string | string[] | any;
  private _mods: any;
  private _modSerialized!: string;

  constructor(
    element: ElementRef,
    renderer: Renderer2,
    @Attribute('cfElem') name: string,
    block: BlockDirective,
    private readonly bemService: BemService
  ) {
    this.blockName = block.name;
    this.name = name;
    this.element = element;
    this.renderer = renderer;

    renderer.addClass(
      element.nativeElement,
      this.bemService.generateClass(block.name, name)
    );
  }

  ngOnChanges() {
    if (JSON.stringify(this.cfMod) !== this._modSerialized) {
      this._modSerialized = JSON.stringify(this.cfMod);

      let mods = this.cfMod;

      const { renderer, element, blockName, name } = this;

      mods = this.bemService.parseMods(mods);

      this.bemService.setMods(
        blockName,
        name,
        mods,
        this._mods || {},
        element,
        renderer
      );

      this._mods = this._mods === mods ? Object.assign({}, mods) : mods;
    }
  }
}
