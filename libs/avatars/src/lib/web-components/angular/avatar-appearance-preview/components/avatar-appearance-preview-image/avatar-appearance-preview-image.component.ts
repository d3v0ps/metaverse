import { Component, Input } from '@angular/core';
import { Appearance } from '../../../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-preview-image',
  template: `
    <div
      cfBlock="appearance-preview-image"
      style="background-image: url('{{ appearance?.src }}')"
    >
      <div cfElem="footer">
        <h4 cfElem="title">{{ appearance?.format }}</h4>
      </div>
    </div>
  `,
})
export class AvatarAppearancePreviewImageComponent {
  @Input() appearance?: Appearance;
}
