import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  PLATFORM_ID,
  SimpleChanges,
} from '@angular/core';
import { SidebarComponent } from './sidebar.component';

// Based on https://github.com/central-factory/ng-sidebar
@Component({
  selector: 'cf-sidebar-container',
  template: `
    <div
      *ngIf="showBackdrop"
      aria-hidden="true"
      class="cf-sidebar__backdrop"
      [ngClass]="backdropClass"
      (click)="_onBackdropClicked()"
    ></div>

    <ng-content select="cf-sidebar,[cf-sidebar]"></ng-content>

    <div
      class="cf-sidebar__content"
      [class.cf-sidebar__content--animate]="animate"
      [ngClass]="contentClass"
      [ngStyle]="_getContentStyle()"
    >
      <ng-content select="[cf-sidebar-content]"></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarContainerComponent
  implements AfterContentInit, OnChanges, OnDestroy
{
  @Input() animate = true;

  @Input() allowSidebarBackdropControl = true;
  @Input() showBackdrop = false;
  @Output() showBackdropChange = new EventEmitter<boolean>();
  @Output() backdropClick = new EventEmitter<null>();

  @Input() contentClass!: string;
  @Input() backdropClass!: string;

  private _sidebars: Array<SidebarComponent> = [];

  private _isBrowser: boolean;

  constructor(
    private _ref: ChangeDetectorRef,
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this._isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterContentInit(): void {
    if (!this._isBrowser) {
      return;
    }

    this._onToggle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this._isBrowser) {
      return;
    }

    if (changes['showBackdrop']) {
      this.showBackdropChange.emit(changes['showBackdrop'].currentValue);
    }
  }

  ngOnDestroy(): void {
    if (!this._isBrowser) {
      return;
    }

    this._unsubscribe();
  }

  /**
   * @internal
   *
   * Adds a sidebar to the container's list of sidebars.
   *
   * @param sidebar {Sidebar} A sidebar within the container to register.
   */
  _addSidebar(sidebar: SidebarComponent) {
    this._sidebars.push(sidebar);
    this._subscribe(sidebar);
  }

  /**
   * @internal
   *
   * Removes a sidebar from the container's list of sidebars.
   *
   * @param sidebar {Sidebar} The sidebar to remove.
   */
  _removeSidebar(sidebar: SidebarComponent) {
    const index = this._sidebars.indexOf(sidebar);
    if (index !== -1) {
      this._sidebars.splice(index, 1);
    }
  }

  /**
   * @internal
   *
   * Computes `margin` value to push page contents to accommodate open sidebars as needed.
   *
   * @return {CSSStyleDeclaration} margin styles for the page content.
   */
  _getContentStyle(): CSSStyleDeclaration {
    let left = 0,
      right = 0,
      top = 0,
      bottom = 0;

    let transformStyle = '';
    let heightStyle = '';
    let widthStyle = '';

    for (const sidebar of this._sidebars) {
      // Slide mode: we need to translate the entire container
      if (sidebar._isModeSlide) {
        if (sidebar.opened) {
          const transformDir = sidebar._isLeftOrRight ? 'X' : 'Y';
          const transformAmt = `${sidebar._isLeftOrTop ? '' : '-'}${
            sidebar._isLeftOrRight ? sidebar._width : sidebar._height
          }`;

          transformStyle = `translate${transformDir}(${transformAmt}px)`;
        }
      }

      // Create a space for the sidebar
      if ((sidebar._isModePush && sidebar.opened) || sidebar.dock) {
        let paddingAmt = 0;

        if (sidebar._isModeSlide && sidebar.opened) {
          if (sidebar._isLeftOrRight) {
            widthStyle = '100%';
          } else {
            heightStyle = '100%';
          }
        } else {
          if (sidebar._isDocked || (sidebar._isModeOver && sidebar.dock)) {
            paddingAmt = sidebar._dockedSize;
          } else {
            paddingAmt = sidebar._isLeftOrRight
              ? sidebar._width
              : sidebar._height;
          }
        }

        switch (sidebar.position) {
          case 'left':
            left = Math.max(left, paddingAmt);
            break;

          case 'right':
            right = Math.max(right, paddingAmt);
            break;

          case 'top':
            top = Math.max(top, paddingAmt);
            break;

          case 'bottom':
            bottom = Math.max(bottom, paddingAmt);
            break;
        }
      }
    }

    return {
      padding: `${top}px ${right}px ${bottom}px ${left}px`,
      webkitTransform: transformStyle,
      transform: transformStyle,
      height: heightStyle,
      width: widthStyle,
    } as CSSStyleDeclaration;
  }

  /**
   * @internal
   *
   * Closes sidebars when the backdrop is clicked, if they have the
   * `closeOnClickBackdrop` option set.
   */
  _onBackdropClicked(): void {
    let backdropClicked = false;
    for (const sidebar of this._sidebars) {
      if (
        sidebar.opened &&
        sidebar.showBackdrop &&
        sidebar.closeOnClickBackdrop
      ) {
        sidebar.close();
        backdropClicked = true;
      }
    }

    if (backdropClicked) {
      this.backdropClick.emit();
    }
  }

  /**
   * Subscribes from a sidebar events to react properly.
   */
  private _subscribe(sidebar: SidebarComponent): void {
    sidebar.openStart.subscribe(() => this._onToggle());
    sidebar.sidebarOpen.subscribe(() => this._markForCheck());

    sidebar.closeStart.subscribe(() => this._onToggle());
    sidebar.sidebarClose.subscribe(() => this._markForCheck());

    sidebar.modeChange.subscribe(() => this._markForCheck());
    sidebar.positionChange.subscribe(() => this._markForCheck());

    sidebar._onRerender.subscribe(() => this._markForCheck());
  }

  /**
   * Unsubscribes from all sidebars.
   */
  private _unsubscribe(): void {
    for (const sidebar of this._sidebars) {
      sidebar.openStart.unsubscribe();
      sidebar.sidebarOpen.unsubscribe();

      sidebar.closeStart.unsubscribe();
      sidebar.sidebarClose.unsubscribe();

      sidebar.modeChange.unsubscribe();
      sidebar.positionChange.unsubscribe();

      sidebar._onRerender.unsubscribe();
    }
  }

  /**
   * Check if we should show the backdrop when a sidebar is toggled.
   */
  private _onToggle(): void {
    if (this._sidebars.length > 0 && this.allowSidebarBackdropControl) {
      // Show backdrop if a single open sidebar has it set
      const hasOpen = this._sidebars.some(
        (sidebar) => sidebar.opened && sidebar.showBackdrop
      );

      this.showBackdrop = hasOpen;
      this.showBackdropChange.emit(hasOpen);
    }

    setTimeout(() => {
      this._markForCheck();
    });
  }

  /**
   * Triggers change detection to recompute styles.
   */
  private _markForCheck(): void {
    this._ref.markForCheck();
  }
}
