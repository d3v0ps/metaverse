import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { findAncestor } from '../../shared/platform/browser/dom/find-ancestor';
import { getMaxZIndex } from '../../shared/platform/browser/dom/get-max-z-index';
import { ResizableEvent } from '../resizable/resizable.directive';

@Component({
  selector: 'cf-window',
  template: `
    <div
      cfBlock="window-overlay"
      [style.display]="visible && backdrop ? 'block' : 'none'"
    ></div>

    <div
      cfBlock="window"
      [cfMod]="{
        maximized: maximized,
        'hide-header': hideHeader
      }"
      tabindex="-1"
      role="dialog"
      #modalRoot
      cfResizable
      [north]="true"
      [northEast]="true"
      [northWest]="true"
      [south]="true"
      [east]="true"
      [west]="true"
      [southEast]="true"
      [southWest]="true"
      (resizing)="onResize($event)"
      cfDraggable
      [dragEventTarget]="dragEventTarget"
      [style.display]="visible ? 'block' : 'none'"
      (mousedown)="moveOnTop()"
      (touchstart)="moveOnTop()"
    >
      <div
        cfBlock="window-header"
        #modalHeader
        (mousedown)="initDrag($event)"
        (touchstart)="initDrag($event)"
        [ngStyle]="{
          'background-color': headerBackgroundColor
        }"
      >
        <div cfElem="controls">
          <button
            *ngIf="closeable"
            cfBlock="button"
            [cfMod]="['danger', 'small', 'has-icon', 'only-icon', 'rounded']"
            (click)="hide()"
            #closeIcon
          >
            <cf-svg-icon
              src="assets/icons/mdi/close.svg"
              cfElem="icon"
            ></cf-svg-icon>
          </button>
          <button
            *ngIf="maximizable"
            cfBlock="button"
            [cfMod]="['primary', 'small', 'has-icon', 'only-icon', 'rounded']"
            (click)="toggleMaximize($event)"
          >
            <cf-svg-icon
              [src]="
                maximized
                  ? 'assets/icons/mdi/window-restore.svg'
                  : 'assets/icons/mdi/window-maximize.svg'
              "
              cfElem="icon"
            ></cf-svg-icon>
          </button>
        </div>
        <div cfElem="title" *ngIf="!hideHeader">
          <ng-content select=".window-header__content"></ng-content>
        </div>
      </div>
      <div
        cfBlock="window-body"
        #modalBody
        [ngStyle]="{
          height: '100%',
          width: '100%'
        }"
      >
        <ng-content select=".window-body__content"></ng-content>
      </div>
      <div cfBlock="window-footer" #modalFooter *ngIf="false">
        <ng-content select=".window-footer__content"></ng-content>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class WindowComponent implements AfterViewChecked {
  @Input() scrollTopEnable = true;
  @Input() closeable = true;
  @Input() maximizable = false;
  @Input() backdrop = true;
  @Input() hideHeader = true;
  @Input() overrideMaximize = false;
  @Input() width?: string;
  @Input() height?: string;
  @Input() x?: number;
  @Input() y?: number;
  @Input() zIndex?: number;
  @Input() headerBackgroundColor =
    'var(--component-window-header-background-color)';

  @Output() moveOnTopEnd = new EventEmitter();
  @Output() openModal = new EventEmitter();
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() resizeWindow = new EventEmitter<ResizableEvent>();
  @Output() maximizeModal = new EventEmitter<boolean>();
  @Output() maximizeWindow = new EventEmitter<boolean>();
  @Output() normalizeWindow = new EventEmitter<boolean>();

  @ViewChild('modalRoot', { static: false }) modalRoot!: ElementRef;
  @ViewChild('modalBody', { static: false }) modalBody!: ElementRef;
  @ViewChild('modalHeader', { static: false }) modalHeader?: ElementRef;
  @ViewChild('modalFooter', { static: false }) modalFooter?: ElementRef;
  @ViewChild('closeIcon', { static: false }) closeIcon!: ElementRef;

  @Input() visible?: boolean;
  @Input() executePostDisplayActions?: boolean;
  @Input() maximized?: boolean;
  preMaximizeRootWidth?: number;
  preMaximizeRootHeight?: number;
  preMaximizeBodyHeight?: number;
  preMaximizePageX?: number;
  preMaximizePageY?: number;
  dragEventTarget!: MouseEvent | TouchEvent;

  constructor(private element: ElementRef) {}

  ngAfterViewChecked() {
    if (this.executePostDisplayActions) {
      this.render();

      this.executePostDisplayActions = false;
    }
  }

  @HostListener('keydown.esc', ['$event'])
  onKeyDown(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.hide();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.executePostDisplayActions = true;
    // this.center();
  }

  show(): void {
    this.executePostDisplayActions = true;
    this.visible = true;
    setTimeout(() => {
      this.modalRoot.nativeElement.focus();
      if (this.scrollTopEnable) {
        this.modalBody.nativeElement.scrollTop = 0;
      }
      this.openModal.emit(true);
    }, 1);
  }

  hide(): void {
    this.visible = false;
    this.closeModal.emit(true);
    this.focusLastModal();
  }

  center() {
    let elementWidth = this.modalRoot.nativeElement.offsetWidth;
    let elementHeight = this.modalRoot.nativeElement.offsetHeight;

    if (elementWidth === 0 && elementHeight === 0) {
      this.modalRoot.nativeElement.style.visibility = 'hidden';
      this.modalRoot.nativeElement.style.display = 'block';
      elementWidth = this.modalRoot.nativeElement.offsetWidth;
      elementHeight = this.modalRoot.nativeElement.offsetHeight;
      this.modalRoot.nativeElement.style.display = 'none';
      this.modalRoot.nativeElement.style.visibility = 'visible';
    }

    const x = Math.max((window.innerWidth - elementWidth) / 2, 0);
    const y = Math.max((window.innerHeight - elementHeight) / 2, 0);

    this.width = elementWidth;
    this.height = elementHeight;
    this.x = x;
    this.y = y;

    this.modalRoot.nativeElement.style.left = x + 'px';
    this.modalRoot.nativeElement.style.top = y + 'px';
  }

  initDrag(event: MouseEvent | TouchEvent) {
    if (this.closeIcon && event.target === this.closeIcon.nativeElement) {
      return;
    }
    if (!this.maximized) {
      this.dragEventTarget = event;
    }
  }

  onResize(event: ResizableEvent) {
    if (event.direction === 'vertical') {
      this.calcBodyHeight();
    }

    if (this.maximized) {
      this.maximize();
    }

    this.resizeWindow.emit(event);
  }

  calcBodyHeight() {
    const diffHeight =
      (this.modalHeader?.nativeElement.offsetHeight || 0) +
      (this.modalFooter?.nativeElement.offsetHeight || 0);
    const contentHeight =
      this.modalRoot.nativeElement.offsetHeight - diffHeight;
    this.modalBody.nativeElement.style.height = contentHeight + 'px';
    this.modalBody.nativeElement.style.maxHeight = 'none';
  }

  getMaxModalIndex() {
    return getMaxZIndex('.window');
  }

  focusLastModal() {
    const modal = findAncestor(
      this.element.nativeElement.parentElement,
      '.window-modal'
    );
    if (modal) {
      modal.focus();
    }
  }

  toggleMaximize(event: MouseEvent) {
    if (this.overrideMaximize) {
      this.maximized ? this.normalizeWindow.emit() : this.maximizeWindow.emit();
      this.maximized = !this.maximized;
      event.preventDefault();
      return;
    }

    if (this.maximized) {
      this.revertMaximize();
    } else {
      this.maximize();
    }

    this.maximizeModal.emit(this.maximized);

    event.preventDefault();
  }

  maximize() {
    this.preMaximizePageX = parseFloat(this.modalRoot.nativeElement.style.top);
    this.preMaximizePageY = parseFloat(this.modalRoot.nativeElement.style.left);
    this.preMaximizeRootWidth = this.modalRoot.nativeElement.offsetWidth;
    this.preMaximizeRootHeight = this.modalRoot.nativeElement.offsetHeight;
    this.preMaximizeBodyHeight = this.modalBody.nativeElement.offsetHeight;

    this.modalRoot.nativeElement.style.top = '50px';
    this.modalRoot.nativeElement.style.left = '100px';
    this.modalRoot.nativeElement.style.width = 'calc(100vw - 100px)';
    this.modalRoot.nativeElement.style.height = 'calc(100vh - 50px)';
    const diffHeight =
      (this.modalHeader?.nativeElement.offsetHeight || 0) +
      (this.modalFooter?.nativeElement.offsetHeight || 0);
    this.modalBody.nativeElement.style.height =
      'calc(100vh - ' + diffHeight + 'px)';
    this.modalBody.nativeElement.style.maxHeight = 'none';

    this.maximized = true;
  }

  revertMaximize() {
    this.modalRoot.nativeElement.style.top = this.preMaximizePageX + 'px';
    this.modalRoot.nativeElement.style.left = this.preMaximizePageY + 'px';
    this.modalRoot.nativeElement.style.width = this.preMaximizeRootWidth + 'px';
    this.modalRoot.nativeElement.style.height =
      this.preMaximizeRootHeight + 'px';
    this.modalBody.nativeElement.style.height =
      this.preMaximizeBodyHeight + 'px';

    this.maximized = false;
  }

  moveOnTop() {
    if (!this.backdrop) {
      const maxModalIndex = this.getMaxModalIndex();
      let zIndex =
        parseFloat(
          window.getComputedStyle(this.modalRoot.nativeElement).zIndex
        ) || 0;
      if (zIndex <= maxModalIndex) {
        zIndex = maxModalIndex + 1;
        this.modalRoot.nativeElement.style.zIndex = zIndex.toString();
      }
      this.moveOnTopEnd.emit(zIndex);
    }
  }

  render() {
    this.moveTo(this.x, this.y);
    this.resize(this.width, this.height);

    if (!this.x && !this.y) {
      this.center();
    }
  }

  moveTo(x?: number, y?: number) {
    if (x) {
      this.modalRoot.nativeElement.style.left = x + 'px';
    }
    if (y) {
      this.modalRoot.nativeElement.style.top = y + 'px';
    }
  }

  resize(width?: string, height?: string) {
    if (width) {
      this.modalRoot.nativeElement.style.width = width;
    }
    if (height) {
      this.modalRoot.nativeElement.style.height = height;
    }
  }
}
