import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { MediaModule } from './media.module';

export default {
  title: 'Atoms/Media',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
        MediaModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.NEEDS_REVISION, 'css', 'angular'],
  },
} as Meta;

export const Image: Story = () => ({
  template: `<cf-media [media]="{
    type: 'image',
    url: 'https://via.placeholder.com/',
    src: 'https://via.placeholder.com/150'
  }"></cf-media>`,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  ],
});

export const ImageWithTitle: Story = () => ({
  template: `<cf-media [media]="{
    type: 'image',
    url: 'https://via.placeholder.com/',
    src: 'https://via.placeholder.com/150',
    title: 'Image'
  }"></cf-media>`,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  ],
});
