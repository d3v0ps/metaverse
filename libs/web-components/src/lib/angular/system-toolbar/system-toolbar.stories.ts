import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  ENTITY_MANAGER_INITIAL_DATA_TOKEN,
} from '@central-factory/persistence/services/entity-manager';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { SystemToolbarModule } from './system-toolbar.module';

export default {
  title: 'Organisms/System Toolbar',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
        SystemToolbarModule,
      ],
      providers: [
        { provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN, useValue: [] },
        { provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN, useValue: [] },
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.BETA, 'css', 'angular'],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `<cf-system-toolbar></cf-system-toolbar>`,
  styles: [
    `
    ::ng-deep .system-toolbar {
      position: relative !important;
    }
    `,
  ],
});
