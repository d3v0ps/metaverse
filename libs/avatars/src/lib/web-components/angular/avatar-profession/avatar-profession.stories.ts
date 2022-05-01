import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { professions } from '@central-factory/avatars/data/demo/professions.data';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AvatarProfessionComponent } from './avatar-profession.component';
import { AvatarProfessionModule } from './avatar-profession.module';

@Component({
  selector: 'cf-avatar-profession-story',
  template: `
    <ng-container *ngFor="let profession of professions">
      <cf-avatar-profession
        [profession]="profession"
        [showIcon]="showIcon"
        [showLabel]="showLabel"
      >
      </cf-avatar-profession>
    </ng-container>
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
})
class AvatarProfessionsStorybookComponent {
  @Input() showIcon?: boolean;
  @Input() showLabel?: boolean;

  professions = professions;
}

export default {
  title: 'Atoms/Avatar Profession',
  component: AvatarProfessionsStorybookComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        EssentialsModule,
        AvatarProfessionModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE, 'css', 'angular'],
  },
} as Meta<AvatarProfessionComponent>;

const Template: Story<AvatarProfessionsStorybookComponent> = (
  args: AvatarProfessionsStorybookComponent
) => ({
  props: args,
});
Template.argTypes = {
  showIcon: {
    control: { type: 'boolean' },
  },
  showLabel: {
    control: { type: 'boolean' },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  showIcon: true,
  showLabel: false,
};
Icon.argTypes = { ...Template.argTypes };

export const Label = Template.bind({});
Label.args = {
  showIcon: false,
  showLabel: true,
};
Label.argTypes = { ...Template.argTypes };

export const Full = Template.bind({});
Full.args = {
  showIcon: true,
  showLabel: true,
};
Full.argTypes = { ...Template.argTypes };
