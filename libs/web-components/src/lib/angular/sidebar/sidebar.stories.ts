import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { SidebarModule } from './sidebar.module';

@Component({
  selector: 'cf-sidebar-storybook-demo',
  template: `
    <div class="scene">
      <div class="scene__body">
        <cf-sidebar-container>
          <cf-sidebar
            [(opened)]="opened"
            [dock]="dock"
            [dockedSize]="dockedSize"
            [showBackdrop]="showBackdrop"
            [closeOnClickBackdrop]="closeOnClickBackdrop"
            [closeOnClickOutside]="closeOnClickOutside"
          >
            <div style="margin-top: 20px">
              <a class="sidebar-item d-block">
                <div class="sidebar-item__text">
                  <span class="sidebar-item__text-content"> Sidebar item </span>
                </div>
                <button
                  class="button button--fab"
                  style="margin-top: 15px;"
                  (click)="opened = !opened"
                >
                  <cf-svg-icon
                    class="button__icon"
                    src="assets/icons/mdi/magnify.svg"
                    svgClass="icon__svg"
                  ></cf-svg-icon>
                </button>
              </a>
            </div>
          </cf-sidebar>
          <div cf-sidebar-content>
            <div class="scene__content">
              <div class="scene-content">
                Content
                <button
                  class="button button--primary"
                  (click)="opened = !opened"
                >
                  Toggle Sidebar
                </button>
              </div>
            </div>
          </div>
        </cf-sidebar-container>
      </div>
    </div>
  `,
})
class SidebarDemoComponent {
  @Input() opened = false;
  @Input() dock = false;
  @Input() dockedSize = '100px';
  @Input() showBackdrop = true;
  @Input() closeOnClickBackdrop = true;
  @Input() closeOnClickOutside = true;
}

export default {
  title: 'Organisms/Sidebar',
  component: SidebarDemoComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SidebarModule,
      ],
    }),
  ],
  argTypes: {
    opened: {
      control: { type: 'boolean' },
    },
    dock: {
      control: { type: 'boolean' },
    },
    dockedSize: {
      control: { type: 'text' },
    },
    showBackdrop: {
      control: { type: 'boolean' },
    },
    closeOnClickBackdrop: {
      control: { type: 'boolean' },
    },
    closeOnClickOutside: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    badges: [BADGE.STABLE, 'angular'],
  },
} as Meta;

const Template: Story<SidebarDemoComponent> = (args: SidebarDemoComponent) => ({
  props: args,
});

export const Normal = Template.bind({});
Normal.args = {
  opened: false,
  showBackdrop: true,
  closeOnClickBackdrop: true,
  closeOnClickOutside: true,
  dock: false,
  dockedSize: '100px',
};

export const Docked = Template.bind({});
Docked.args = {
  opened: false,
  showBackdrop: true,
  closeOnClickBackdrop: true,
  closeOnClickOutside: true,
  dock: true,
  dockedSize: '100px',
};
