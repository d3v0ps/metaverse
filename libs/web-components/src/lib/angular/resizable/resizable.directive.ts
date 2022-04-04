import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEvent } from '../../shared/platform/browser/events/get-event';
import { isLeftButton } from '../../shared/platform/browser/events/is-left-button';

export type ResizableEvent = {
  width: number;
  height: number;
  event?: MouseEvent | Touch;
  direction?: 'horizontal' | 'vertical';
};

@Directive({
  selector: '[cfResizable]',
})
export class ResizableDirective implements OnDestroy, AfterViewInit {
  @Input() north?: boolean;
  @Input() south?: boolean;
  @Input() east?: boolean;
  @Input() northEast?: boolean;
  @Input() southEast?: boolean;
  @Input() west?: boolean;
  @Input() northWest?: boolean;
  @Input() southWest?: boolean;
  @Input() ghost?: boolean;

  @Output() resizeBegin: EventEmitter<any> = new EventEmitter();
  @Output() resizing: EventEmitter<ResizableEvent> = new EventEmitter();
  @Output() resizeEnd: EventEmitter<ResizableEvent> = new EventEmitter();

  element: HTMLElement;
  private subscription?: Subscription;
  private newWidth!: number;
  private newHeight!: number;
  private resizingS?: boolean;
  private resizingE?: boolean;
  private resizingN?: boolean;
  private resizingW?: boolean;
  private resizingSE?: boolean;
  private resizingSW?: boolean;
  private resizingNE?: boolean;
  private resizingNW?: boolean;

  private minWidth!: number;
  private maxWidth!: number;
  private minHeight!: number;
  private maxHeight!: number;

  private resizeHeightSkipping = false;

  private resizeWidthSkipping = false;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngAfterViewInit(): void {
    if (this.south) {
      this.createHandle('resize-handle-s');
    }
    if (this.east) {
      this.createHandle('resize-handle-e');
    }
    if (this.southEast) {
      this.createHandle('resize-handle-se');
    }
    if (this.north) {
      this.createHandle('resize-handle-n');
    }
    if (this.northEast) {
      this.createHandle('resize-handle-ne');
    }
    if (this.west) {
      this.createHandle('resize-handle-w');
    }
    if (this.southWest) {
      this.createHandle('resize-handle-sw');
    }
    if (this.northWest) {
      this.createHandle('resize-handle-nw');
    }
    const computedStyle = window.getComputedStyle(this.element);
    this.minWidth = parseFloat(computedStyle.minWidth);
    this.maxWidth = parseFloat(computedStyle.maxWidth);
    this.minHeight = parseFloat(computedStyle.minHeight);
    this.maxHeight = parseFloat(computedStyle.maxHeight);
  }

  ngOnDestroy(): void {
    this.destroySubscription();
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onMousedown(event: MouseEvent | TouchEvent): void {
    if (!isLeftButton(event)) {
      return;
    }
    const classList = (event.target as HTMLElement).classList;
    const isSouth = classList.contains('resize-handle-s');
    const isEast = classList.contains('resize-handle-e');
    const isSouthEast = classList.contains('resize-handle-se');
    const isNorth = classList.contains('resize-handle-n');
    const isWest = classList.contains('resize-handle-w');
    const isNorthEast = classList.contains('resize-handle-ne');
    const isNorthWest = classList.contains('resize-handle-nw');
    const isSouthWest = classList.contains('resize-handle-sw');

    const evt = getEvent(event);
    const width = this.element.clientWidth;
    const height = this.element.clientHeight;
    const screenX = evt.screenX;
    const screenY = evt.screenY;

    const isTouchEvent = event.type.startsWith('touch');
    const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
    const upEvent = isTouchEvent ? 'touchend' : 'mouseup';

    if (
      isSouth ||
      isEast ||
      isNorth ||
      isWest ||
      isSouthEast ||
      isSouthWest ||
      isNorthEast ||
      isNorthWest
    ) {
      this.initResize(
        event,
        isSouth,
        isEast,
        isSouthEast,
        isNorth,
        isWest,
        isNorthEast,
        isNorthWest,
        isSouthWest
      );

      const mouseup = fromEvent(document, upEvent);
      this.subscription = mouseup.subscribe((ev) =>
        this.onMouseup(ev as MouseEvent | TouchEvent)
      );

      const mouseMoveSub = fromEvent(document, moveEvent)
        .pipe(takeUntil(mouseup))
        .subscribe((e) =>
          this.move(
            e as MouseEvent | TouchEvent,
            width,
            height,
            screenX,
            screenY
          )
        );

      this.subscription.add(mouseMoveSub);
    }
  }

  move(
    event: MouseEvent | TouchEvent,
    width: number,
    height: number,
    screenX: number,
    screenY: number
  ): void {
    const evt = getEvent(event);
    const movementX = evt.screenX - screenX;
    const movementY = evt.screenY - screenY;
    this.newWidth = width + movementX;
    this.newHeight = height + movementY;
    this.resizeWidth(evt);
    this.resizeHeight(evt);
  }

  onMouseup(event: MouseEvent | TouchEvent): void {
    this.endResize(event);
    this.destroySubscription();
  }

  initResize(
    event: MouseEvent | TouchEvent,
    isSouth: boolean,
    isEast: boolean,
    isSouthEast: boolean,
    isNorth: boolean,
    isWest: boolean,
    isNorthEast: boolean,
    isNorthWest: boolean,
    isSouthWest: boolean
  ) {
    if (isSouth) {
      this.resizingS = true;
    }
    if (isEast) {
      this.resizingE = true;
    }
    if (isSouthEast) {
      this.resizingSE = true;
    }
    if (isNorth) {
      this.resizingN = true;
    }
    if (isWest) {
      this.resizingW = true;
    }
    if (isNorthEast) {
      this.resizingNE = true;
    }
    if (isNorthWest) {
      this.resizingNW = true;
    }
    if (isSouthWest) {
      this.resizingSW = true;
    }
    this.element.classList.add('resizing');
    this.newWidth = this.element.clientWidth;
    this.newHeight = this.element.clientHeight;

    event.stopPropagation();
    this.resizeBegin.emit();
  }

  endResize(event: MouseEvent | TouchEvent) {
    this.resizingS = false;
    this.resizingE = false;
    this.resizingW = false;
    this.resizingN = false;
    this.resizingSE = false;
    this.resizingSW = false;
    this.resizingNE = false;
    this.resizingNW = false;
    this.element.classList.remove('resizing');
    this.resizeEnd.emit({
      event: getEvent(event),
      width: this.newWidth,
      height: this.newHeight,
    });
  }

  resizeWidth(event: MouseEvent | Touch) {
    if (this.resizeWidthSkipping) {
      return;
    }

    this.resizeWidthSkipping = true;

    setTimeout(() => {
      this.resizeWidthSkipping = false;
    }, 100);

    const overMinWidth = !this.minWidth || this.newWidth >= this.minWidth;
    const underMaxWidth = !this.maxWidth || this.newWidth <= this.maxWidth;

    if (this.resizingSE || this.resizingNE || this.resizingE) {
      if (overMinWidth && underMaxWidth) {
        if (!this.ghost) {
          this.element.style.width = `${this.newWidth}px`;
        }
        this.resizing.emit({
          event,
          width: this.newWidth,
          height: this.newHeight,
          direction: 'horizontal',
        });
      }
    }

    if (this.resizingSW || this.resizingNW || this.resizingW) {
      if (overMinWidth && underMaxWidth) {
        if (!this.ghost) {
          this.element.style.width = `${this.newWidth}px`;
        }
        this.resizing.emit({
          event,
          width: this.newWidth,
          height: this.newHeight,
          direction: 'horizontal',
        });
      }
    }
  }

  resizeHeight(event: MouseEvent | Touch) {
    if (this.resizeHeightSkipping) {
      return;
    }

    this.resizeHeightSkipping = true;

    setTimeout(() => {
      this.resizeHeightSkipping = false;
    }, 100);

    const overMinHeight = !this.minHeight || this.newHeight >= this.minHeight;
    const underMaxHeight = !this.maxHeight || this.newHeight <= this.maxHeight;

    if (this.resizingSE || this.resizingSW || this.resizingS) {
      if (overMinHeight && underMaxHeight) {
        if (!this.ghost) {
          this.element.style.height = `${this.newHeight}px`;
        }
        this.resizing.emit({
          event,
          width: this.newWidth,
          height: this.newHeight,
          direction: 'vertical',
        });
      }
    }

    if (this.resizingNE || this.resizingNW || this.resizingN) {
      const currentHeight = parseInt(
        getComputedStyle(this.element).height.split('px')[0],
        10
      );
      const currentTop = parseInt(
        getComputedStyle(this.element).top.split('px')[0],
        10
      );

      const diff = this.newHeight - currentHeight;
      const newHeight = (this.newHeight = currentHeight - diff);
      const newTop = currentTop + diff;

      if (overMinHeight && underMaxHeight) {
        if (!this.ghost) {
          this.element.style.height = `${newHeight}px`;
          this.element.style.top = `${newTop}px`;
        }
        this.resizing.emit({
          event,
          width: this.newWidth,
          height: newHeight,
          direction: 'vertical',
        });
      }
    }
  }

  private destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

  private createHandle(edgeClass: string) {
    const node = document.createElement('span');
    node.className = edgeClass;
    this.element.appendChild(node);
  }
}
