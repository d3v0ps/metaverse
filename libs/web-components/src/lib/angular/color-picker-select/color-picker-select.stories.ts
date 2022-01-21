import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { ColorPickerSelectModule } from './color-picker-select.module';

export default {
  title: 'Angular/Color Selects',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        ColorPickerSelectModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `
    <cf-color-picker-select [options]="[
      {
        label: 'Primary',
        value: '#706fd3'
      },
      {
        label: 'Secondary',
        value: '#d1d36f'
      },
      {
        label: 'Light',
        value: '#fefefe'
      },
      {
        label: 'Dark',
        value: '#212121'
      },
      {
        label: 'Success',
        value: '#4caf50'
      },
      {
        label: 'Warning',
        value: '#ff9800'
      },
      {
        label: 'Danger',
        value: '#f44336'
      },
      {
        label: 'Info',
        value: '#2196f3'
      }
    ]">

    </cf-color-picker-select>
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
