import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { FileUploadModule } from './file-upload.module';

export default {
  title: 'Molecules/File Upload',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        FileUploadModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE, 'angular'],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `
    <cf-file-upload></cf-file-upload>
  `,
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
