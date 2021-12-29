import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ravensCloackAssetMock } from '../../../data/storybook/equipments';
import { AssetDetailComponent } from './asset-detail.component';

export default {
  title: 'Assets/Detail',
  component: AssetDetailComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        BemModule,
      ],
    }),
  ],
} as Meta<AssetDetailComponent>;

const Template: Story<AssetDetailComponent> = (args: AssetDetailComponent) => ({
  component: AssetDetailComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  asset: undefined,
};

export const Equipment = Template.bind({});
Equipment.args = {
  asset: ravensCloackAssetMock,
};
