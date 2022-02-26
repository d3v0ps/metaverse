import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BemModule } from "../bem/bem.module";
import { AnimatedSpritesheetComponent } from "./animated-spritesheet.component";
import { LayeredSpritesheetComponent } from "./layered-spritesheet.component";
import { SpritesheetComponent } from "./spritesheet.component";

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [SpritesheetComponent, LayeredSpritesheetComponent, AnimatedSpritesheetComponent],
  exports: [SpritesheetComponent, LayeredSpritesheetComponent]
})
export class SpritesheetModule { }
