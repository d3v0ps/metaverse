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
      tabindex="-1"
      role="dialog"
      #modalRoot
      cfResizable
      [south]="true"
      [east]="true"
      [southEast]="true"
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
      >
        <div cfElem="title">
          <ng-content select=".window-header__content"></ng-content>
        </div>
        <div cfElem="controls">
          <cf-svg-icon
            *ngIf="maximizable"
            [src]="
              maximized
                ? 'assets/icons/mdi/window-restore.svg'
                : 'assets/icons/mdi/window-maximize.svg'
            "
            (click)="toggleMaximize($event)"
          ></cf-svg-icon>
          <cf-svg-icon
            #closeIcon
            src="assets/icons/mdi/window-close.svg"
            (click)="hide()"
          ></cf-svg-icon>
        </div>
      </div>

      <div cfBlock="window-body" #modalBody>
        <ng-content select=".window-body__content"></ng-content>
      </div>
      <div cfBlock="window-footer" #modalFooter>
        <ng-content select=".window-footer__content"></ng-content>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class WindowComponent implements AfterViewChecked {
  @Input() scrollTopEnable = true;
  @Input() maximizable = false;
  @Input() backdrop = true;

  @Output() openModal = new EventEmitter();
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() resizeModal = new EventEmitter<ResizableEvent>();
  @Output() maximizeModal = new EventEmitter<boolean>();

  @ViewChild('modalRoot', { static: false }) modalRoot!: ElementRef;
  @ViewChild('modalBody', { static: false }) modalBody!: ElementRef;
  @ViewChild('modalHeader', { static: false }) modalHeader!: ElementRef;
  @ViewChild('modalFooter', { static: false }) modalFooter!: ElementRef;
  @ViewChild('closeIcon', { static: false }) closeIcon!: ElementRef;

  visible?: boolean;
  executePostDisplayActions?: boolean;
  maximized?: boolean;
  preMaximizeRootWidth?: number;
  preMaximizeRootHeight?: number;
  preMaximizeBodyHeight?: number;
  preMaximizePageX?: number;
  preMaximizePageY?: number;
  dragEventTarget!: MouseEvent | TouchEvent;

  constructor(private element: ElementRef) {}

  ngAfterViewChecked() {
    if (this.executePostDisplayActions) {
      this.center();
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
    this.center();
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

    this.modalRoot.nativeElement.style.left = x + 'px';
    this.modalRoot.nativeElement.style.top = y + 'px';
  }

  initDrag(event: MouseEvent | TouchEvent) {
    if (event.target === this.closeIcon.nativeElement) {
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

    this.resizeModal.emit(event);
  }

  calcBodyHeight() {
    const diffHeight =
      this.modalHeader.nativeElement.offsetHeight +
      this.modalFooter.nativeElement.offsetHeight;
    const contentHeight =
      this.modalRoot.nativeElement.offsetHeight - diffHeight;
    this.modalBody.nativeElement.style.height = contentHeight + 'px';
    this.modalBody.nativeElement.style.maxHeight = 'none';
  }

  getMaxModalIndex() {
    return getMaxZIndex('.ui-modal');
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

    this.modalRoot.nativeElement.style.top = '0px';
    this.modalRoot.nativeElement.style.left = '0px';
    this.modalRoot.nativeElement.style.width = '100vw';
    this.modalRoot.nativeElement.style.height = '100vh';
    const diffHeight =
      this.modalHeader.nativeElement.offsetHeight +
      this.modalFooter.nativeElement.offsetHeight;
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
    }
  }
}
