import { Component } from '@angular/core';

export type CreditsItem = {
  label: string;
  link: string;
  version?: string;
};

@Component({
  selector: 'cf-credits',
  template: `
    <div>
      <h4>Technologies</h4>
      <p>This app was built with the following technologies:</p>
      <ul>
        <li *ngFor="let item of technologies">
          <ng-container
            *ngTemplateOutlet="
              creditsItemTemplate;
              context: { item: this.item }
            "
          ></ng-container>
        </li>
      </ul>
    </div>
    <div>
      <h4>Visual Assets</h4>
      <p>This app uses the following assets:</p>
      <ul>
        <li *ngFor="let item of visualAssets">
          <ng-container
            *ngTemplateOutlet="
              creditsItemTemplate;
              context: { item: this.item }
            "
          ></ng-container>
        </li>
      </ul>
    </div>
    <ng-template #creditsItemTemplate let-item="item">
      <a [href]="item.link">{{ item.label }} {{ item.version }}</a>
    </ng-template>
  `,
})
export class CreditsScene {
  public technologies: CreditsItem[] = [
    {
      label: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
      version: '4.3.5',
    },
    {
      label: 'Angular',
      link: 'https://angular.io/',
      version: '13',
    },
    {
      label: 'RxJS',
      link: 'https://rxjs.io/',
      version: '6.6.0',
    },
    {
      label: 'RxDB',
      link: 'https://rxdb.io/',
      version: '10.5.4',
    },
    {
      label: 'ng-select',
      link: 'https://ng-select.github.io/ng-select',
      version: '8.1.1',
    },
    {
      label: 'model-viewer',
      link: 'https://modelviewer.dev/',
      version: '1.9.2',
    },
  ];

  public visualAssets: CreditsItem[] = [
    {
      label: 'Material Design Icons',
      link: 'https://materialdesignicons.com/',
      version: '6.4.95',
    },
    {
      label: 'Simple Icons',
      link: 'https://simpleicons.org/',
      version: '6.5.0',
    },
  ];
}
