import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '@central-factory/applications/__generated__/models';

@Component({
  selector: 'cf-applications-carousel',
  template: `
    <div
      cfBlock="applications-carousel"
      cdkDropList
      cdkDropListSortingDisabled
      [cdkDropListData]="carouselApplications"
      [cdkDropListConnectedTo]="dropListConnectedTo ? dropListConnectedTo : []"
      (cdkDropListDropped)="applicationCardDrop.emit($event)"
    >
      <div
        cdkDrag
        [cdkDragData]="application"
        *ngFor="let application of carouselApplications"
        cfBlock="applications-carousel-item"
      >
        <div cfBlock="drag-placeholder" *cdkDragPlaceholder></div>
        <cf-application-card
          [cardStyle]="cardStyle"
          [shadow]="shadow"
          [showHeader]="showHeader"
          [showInfo]="showInfo"
          [showAuthor]="showAuthor"
          [showDescription]="showDescription"
          [showInstallButton]="
            showInstallButton &&
            !isInstalled(application) &&
            isInstallable(application)
          "
          [showUninstallButton]="
            showUninstallButton && isInstalled(application)
          "
          [showPlayButton]="showPlayButton && isInstalled(application)"
          [outline]="outline"
          [application]="application"
          (applicationClick)="applicationCardClick.emit(application)"
          (playClick)="applicationPlayClick.emit(application)"
          (starClick)="applicationStarClick.emit(application)"
          (installClick)="applicationInstallClick.emit(application)"
          (uninstallClick)="applicationUninstallClick.emit(application)"
        ></cf-application-card>
      </div>
    </div>
  `,
})
export class ApplicationsCarouselComponent {
  @Input() outline = false;
  @Input() shadow = true;
  @Input() showHeader = true;
  @Input() showInfo = true;
  @Input() showDescription = true;
  @Input() showAuthor = true;
  @Input() showInstallButton = true;
  @Input() showPlayButton = true;
  @Input() showUninstallButton = true;
  @Input() cardStyle = {
    width: '300px',
  };
  @Input() set applicationsPerPage(value: number | undefined) {
    this._applicationsPerPage = value || 0;
    this.carouselApplications =
      this._applications.slice(0, this.applicationsPerPage) || [];
  }

  @Input() set applications(value: Application[] | undefined) {
    this._applications = value || [];
    this.carouselApplications = this._applications.slice(
      0,
      this.applicationsPerPage
    );
  }
  get applications(): Application[] | undefined {
    return this._applications;
  }
  @Input() installableApplications?: Application[] = [];
  @Input() installedApplications?: Application[] = [];
  @Input() carouselApplications: Application[] = [];
  @Input() dropListConnectedTo?: CdkDropList<any>[];

  @Output() applicationCardClick = new EventEmitter<Application>();
  @Output() applicationPlayClick = new EventEmitter<Application>();
  @Output() applicationStarClick = new EventEmitter<Application>();
  @Output() applicationInstallClick = new EventEmitter<Application>();
  @Output() applicationUninstallClick = new EventEmitter<Application>();
  @Output() applicationCardDrop = new EventEmitter<
    CdkDragDrop<Application[]>
  >();

  private _applications: Application[] = [];
  private _applicationsPerPage = 0;

  isInstallable(application: Application) {
    if (
      !this.installableApplications ||
      this.installableApplications.length === 0
    ) {
      return false;
    }

    return this.installableApplications.some(
      (app) => app.id === application.id
    );
  }

  isInstalled(application: Application) {
    if (
      !this.installedApplications ||
      this.installedApplications.length === 0
    ) {
      return false;
    }

    return this.installedApplications.some((app) => app.id === application.id);
  }
}
