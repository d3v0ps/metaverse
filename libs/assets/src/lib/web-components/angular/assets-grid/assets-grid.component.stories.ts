import { CommonModule } from '@angular/common';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { equipmentsMocks } from '../../../data/storybook/equipments';
import { AssetsGridComponent } from './assets-grid.component';

export default {
  title: 'Assets/Grid',
  component: AssetsGridComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BemModule],
    }),
  ],
} as Meta<AssetsGridComponent>;

const Template: Story<AssetsGridComponent> = (args: AssetsGridComponent) => ({
  component: AssetsGridComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  assets: [],
  activeAsset: undefined,
};

export const Equipments = Template.bind({});
Equipments.args = {
  assets: equipmentsMocks,
  activeAsset: equipmentsMocks[0],
};
