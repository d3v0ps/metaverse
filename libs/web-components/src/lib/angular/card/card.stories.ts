import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';

export default {
  title: 'Molecules/Card',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.NEEDS_REVISION, 'css'],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `
    <div class="card">
      <div class="card__header">
        <h3 class="card__title">Card title</h3>
      </div>
      <div class="card__body">
        Card body
      </div>
      <div class="card__footer">
        Card footer
      </div>
    </div>
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
