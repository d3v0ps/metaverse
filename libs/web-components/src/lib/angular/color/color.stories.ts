import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';

@Component({
  selector: 'cf-storybook-color-variation',
  template: `
    <div>
      <div
        class="color"
        *ngIf="color && variation"
        style="background-color: var(--color-base-{{ color }}-{{
          variation
        }}); "
      ></div>
      <h3>{{ variation | titlecase }}</h3>
      <h5>{{ computedValue }}</h5>
    </div>
  `,
  styles: [
    `
      .color {
        min-width: 50px;
        min-height: 50px;
        border-radius: 50%;
        margin: 0 auto;
        width: max-content;
      }

      h3,
      h5 {
        text-align: center;
      }

      h3 {
        margin-block-end: 0.25rem;
      }
      h5 {
        margin-block-start: 0;
        margin-block-end: 0;
      }
    `,
  ],
})
class ColorVariationComponent {
  @Input() set color(value: string | undefined) {
    this._color = value;
    this.computedValue = this.getComputedValue();
  }
  get color(): string | undefined {
    return this._color;
  }

  @Input() set variation(value: string | undefined) {
    this._variation = value;
    this.computedValue = this.getComputedValue();
  }
  get variation(): string | undefined {
    return this._variation;
  }

  computedValue?: string;

  private _color?: string;
  private _variation?: string = 'medium';

  private getComputedValue() {
    return getComputedStyle(document.documentElement).getPropertyValue(
      `--color-base-${this.color}-${this.variation}`
    );
  }
}

@Component({
  selector: 'cf-storybook-color',
  template: `
    <ng-container *ngIf="color">
      <h2>{{ color | titlecase }}</h2>
      <section>
        <cf-storybook-color-variation
          *ngFor="let variation of variations"
          [color]="color"
          [variation]="variation"
        ></cf-storybook-color-variation>
      </section>
    </ng-container>
  `,
  styles: [
    `
      h2 {
        margin-block-start: 0;
      }

      section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 2rem;
      }
    `,
  ],
})
class ColorComponent {
  @Input() color?: string;

  variations = [
    'lightest',
    'lighter',
    'light',
    'medium',
    'dark',
    'darker',
    'darkest',
  ];
}

export default {
  title: 'Atoms/Color',
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, SvgIconModule.forRoot(), CommonModule],
      declarations: [ColorVariationComponent, ColorComponent],
    }),
  ],
  parameters: {
    badges: [BADGE.NEEDS_REVISION, 'css'],
  },
} as Meta;

export const Main: Story = () => ({
  template: `
    <section>
      <cf-storybook-color color="primary"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="secondary"></cf-storybook-color>
    </section>
  `,
});

export const State: Story = () => ({
  template: `
    <section>
      <cf-storybook-color color="info"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="success"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="warning"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="danger"></cf-storybook-color>
    </section>
  `,
});

export const Monochrome: Story = () => ({
  template: `
    <section>
      <cf-storybook-color color="dark"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="light"></cf-storybook-color>
    </section>
  `,
});

export const Rarity: Story = () => ({
  template: `
    <section>
      <cf-storybook-color color="common"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="uncommon"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="rare"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="epic"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="legendary"></cf-storybook-color>
    </section>
    <section>
      <cf-storybook-color color="unique"></cf-storybook-color>
    </section>
  `,
});
