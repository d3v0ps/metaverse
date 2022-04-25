import { NgModule } from "@angular/core";
import { ReactRendererComponent } from "./react-renderer.component";

@NgModule({
  declarations: [ReactRendererComponent],
  exports: [ReactRendererComponent]
})
export class ReactRendererModule { }
