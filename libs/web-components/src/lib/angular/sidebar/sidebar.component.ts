import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { isIOS, isLTR } from '../../shared/platform/browser';
import { SidebarContainerComponent } from './sidebar-container.component';

@Component({
  selector: 'cf-sidebar',
  template: `
    <aside
      #sidebar
      role="complementary"
      [attr.aria-hidden]="!opened"
      [attr.aria-label]="ariaLabel"
      class="cf-sidebar cf-sidebar--{{
        opened ? 'opened' : 'closed'
      }} cf-sidebar--{{ position }} cf-sidebar--{{ mode }}"
      [class.cf-sidebar--docked]="_isDocked"
      [class.cf-sidebar--inert]="_isInert"
      [class.cf-sidebar--animate]="animate"
      [ngClass]="sidebarClass"
      [ngStyle]="_getStyle()"
    >
      <ng-content></ng-content>
    </aside>
  `,
  styles: [
    `
      .cf-sidebar {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;
        position: absolute;
        touch-action: auto;
        will-change: initial;
        z-index: 2;
      }

      .cf-sidebar--left {
        bottom: 0;
        left: 0;
        top: 0;
      }

      .cf-sidebar--right {
        bottom: 0;
        right: 0;
        top: 0;
      }

      .cf-sidebar--top {
        left: 0;
        right: 0;
        top: 0;
      }

      .cf-sidebar--bottom {
        bottom: 0;
        left: 0;
        right: 0;
      }

      .cf-sidebar--inert {
        pointer-events: none;
        touch-action: none;
        will-change: transform;
      }

      .cf-sidebar--animate {
        -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);
        transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent
  implements AfterContentInit, OnInit, OnChanges, OnDestroy
{
  // `openedChange` allows for "2-way" data binding
  @Input() opened = false;
  @Output() openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() mode: 'over' | 'push' | 'slide' = 'over';
  @Input() dock = false;
  @Input() dockedSize = '0px';
  @Input() position: 'start' | 'end' | 'left' | 'right' | 'top' | 'bottom' =
    'start';
  @Input() animate = true;

  @Input() autoCollapseHeight!: number;
  @Input() autoCollapseWidth!: number;
  @Input() autoCollapseOnInit = true;

  @Input() sidebarClass!: string;

  @Input() ariaLabel!: string;
  @Input() trapFocus = false;
  @Input() autoFocus = true;

  @Input() showBackdrop = false;
  @Input() closeOnClickBackdrop = false;
  @Input() closeOnClickOutside = false;

  @Input() keyClose = false;
  @Input() keyCode = 27; // Default to ESC key

  @Output() contentInit: EventEmitter<null> = new EventEmitter<null>();
  @Output() openStart: EventEmitter<null> = new EventEmitter<null>();
  @Output() sidebarOpen: EventEmitter<null> = new EventEmitter<null>();
  @Output() closeStart: EventEmitter<null> = new EventEmitter<null>();
  @Output() sidebarClose: EventEmitter<null> = new EventEmitter<null>();
  @Output() transitionEnd: EventEmitter<null> = new EventEmitter<null>();
  @Output() modeChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() positionChange: EventEmitter<string> = new EventEmitter<string>();

  /** @internal */
  @Output() _onRerender: EventEmitter<null> = new EventEmitter<null>();

  /** @internal */
  @ViewChild('sidebar', { static: false }) _elSidebar!: ElementRef;

  private _focusableElementsString: string =
    'a[href], area[href], input:not([disabled]), select:not([disabled]),' +
    'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
  private _focusableElements!: Array<HTMLElement>;
  private _focusedBeforeOpen!: HTMLElement | null;

  private _tabIndexAttr = '__tabindex__';
  private _tabIndexIndicatorAttr = '__ngsidebar-tabindex__';

  private _wasCollapsed!: boolean;

  // Delay initial animation (issues #59, #112)
  private _shouldAnimate!: boolean;

  private _clickEvent = 'click';
  private _onClickOutsideAttached = false;
  private _onKeyDownAttached = false;
  private _onResizeAttached = false;

  private _isBrowser: boolean;

  constructor(
    @Optional() private _container: SidebarContainerComponent,
    private _ref: ChangeDetectorRef,
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    if (!this._container) {
      throw new Error(
        '<cf-sidebar> must be inside a <cf-sidebar-container>. ' +
          'See https://github.com/arkon/ng-sidebar#usage for more info.'
      );
    }

    this._isBrowser = isPlatformBrowser(platformId);

    // Handle taps in iOS
    if (this._isBrowser && isIOS() && !('onclick' in window)) {
      this._clickEvent = 'touchstart';
    }

    this._normalizePosition();

    this.open = this.open.bind(this);
    this._onTransitionEnd = this._onTransitionEnd.bind(this);
    this._onFocusTrap = this._onFocusTrap.bind(this);
    this._onClickOutside = this._onClickOutside.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._collapse = this._collapse.bind(this);
  }

  ngOnInit(): void {
    if (!this._isBrowser) {
      return;
    }

    if (this.animate) {
      this._shouldAnimate = true;
      this.animate = false;
    }

    this._container._addSidebar(this);

    if (this.autoCollapseOnInit) {
      this._collapse();
    }
  }

  ngAfterContentInit(): void {
    this.contentInit.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this._isBrowser) {
      return;
    }

    if (changes['animate'] && this._shouldAnimate) {
      this._shouldAnimate = changes['animate'].currentValue;
    }

    if (changes['closeOnClickOutside']) {
      if (changes['closeOnClickOutside'].currentValue) {
        this._initCloseClickListener();
      } else {
        this._destroyCloseClickListener();
      }
    }
    if (changes['keyClose']) {
      if (changes['keyClose'].currentValue) {
        this._initCloseKeyDownListener();
      } else {
        this._destroyCloseKeyDownListener();
      }
    }

    if (changes['position']) {
      // Handle "start" and "end" aliases
      this._normalizePosition();

      // Emit change in timeout to allow for position change to be rendered first
      setTimeout(() => {
        this.positionChange.emit(changes['position'].currentValue);
      });
    }

    if (changes['mode']) {
      setTimeout(() => {
        this.modeChange.emit(changes['mode'].currentValue);
      });
    }

    if (changes['dock']) {
      this.triggerRerender();
    }

    if (changes['opened']) {
      if (this._shouldAnimate) {
        this.animate = true;
        this._shouldAnimate = false;
      }

      if (changes['opened'].currentValue) {
        this.open();
      } else {
        this.close();
      }
    }

    if (changes['autoCollapseHeight'] || changes['autoCollapseWidth']) {
      this._initCollapseListeners();
    }
  }

  ngOnDestroy(): void {
    if (!this._isBrowser) {
      return;
    }

    this._destroyCloseListeners();
    this._destroyCollapseListeners();

    this._container._removeSidebar(this);
  }

  // Sidebar toggling
  // ==============================================================================================

  /**
   * Opens the sidebar and emits the appropriate events.
   */
  open(): void {
    if (!this._isBrowser) {
      return;
    }

    this.opened = true;
    this.openedChange.emit(true);

    this.openStart.emit();

    this._ref.detectChanges();

    setTimeout(() => {
      if (this.animate && !this._isModeSlide) {
        this._elSidebar.nativeElement.addEventListener(
          'transitionend',
          this._onTransitionEnd
        );
      } else {
        this._setFocused();
        this._initCloseListeners();

        if (this.opened) {
          this.sidebarOpen.emit();
        }
      }
    });
  }

  /**
   * Closes the sidebar and emits the appropriate events.
   */
  close(): void {
    if (!this._isBrowser) {
      return;
    }

    this.opened = false;
    this.openedChange.emit(false);

    this.closeStart.emit();

    this._ref.detectChanges();

    setTimeout(() => {
      if (this.animate && !this._isModeSlide) {
        this._elSidebar.nativeElement.addEventListener(
          'transitionend',
          this._onTransitionEnd
        );
      } else {
        this._setFocused();
        this._destroyCloseListeners();

        if (!this.opened) {
          this.sidebarClose.emit();
        }
      }
    });
  }

  /**
   * Manually trigger a re-render of the container. Useful if the sidebar contents might change.
   */
  triggerRerender(): void {
    if (!this._isBrowser) {
      return;
    }

    setTimeout(() => {
      this._onRerender.emit();
    });
  }

  /**
   * @internal
   *
   * Computes the transform styles for the sidebar template.
   *
   * @return {CSSStyleDeclaration} The transform styles, with the WebKit-prefixed version as well.
   */
  _getStyle(): CSSStyleDeclaration {
    let transformStyle = '';

    // Hides sidebar off screen when closed
    if (!this.opened) {
      const transformDir = 'translate' + (this._isLeftOrRight ? 'X' : 'Y');
      const translateAmt = `${this._isLeftOrTop ? '-' : ''}100%`;

      transformStyle = `${transformDir}(${translateAmt})`;

      // Docked mode: partially remains open
      // Note that using `calc(...)` within `transform(...)` doesn't work in IE
      if (
        this.dock &&
        this._dockedSize > 0 &&
        !(this._isModeSlide && this.opened)
      ) {
        transformStyle += ` ${transformDir}(${this._isLeftOrTop ? '+' : '-'}${
          this.dockedSize
        })`;
      }
    }

    return {
      webkitTransform: transformStyle,
      transform: transformStyle,
    } as CSSStyleDeclaration;
  }

  /**
   * @internal
   *
   * Handles the `transitionend` event on the sidebar to emit the onOpened/onClosed events after the transform
   * transition is completed.
   */
  _onTransitionEnd(e: TransitionEvent): void {
    if (
      e.target === this._elSidebar.nativeElement &&
      e.propertyName.endsWith('transform')
    ) {
      this._setFocused();

      if (this.opened) {
        this._initCloseListeners();
        this.sidebarOpen.emit();
      } else {
        this._destroyCloseListeners();
        this.sidebarClose.emit();
      }

      this.transitionEnd.emit();

      this._elSidebar.nativeElement.removeEventListener(
        'transitionend',
        this._onTransitionEnd
      );
    }
  }

  // Focus on open/close
  // ==============================================================================================

  /**
   * Returns whether focus should be trapped within the sidebar.
   *
   * @return {boolean} Trap focus inside sidebar.
   */
  private get _shouldTrapFocus(): boolean {
    return this.opened && this.trapFocus;
  }

  /**
   * Sets focus to the first focusable element inside the sidebar.
   */
  private _focusFirstItem(): void {
    if (this._focusableElements && this._focusableElements.length > 0) {
      this._focusableElements[0].focus();
    }
  }

  /**
   * Loops focus back to the start of the sidebar if set to do so.
   */
  private _onFocusTrap(e: FocusEvent): void {
    if (
      this._shouldTrapFocus &&
      !this._elSidebar.nativeElement.contains(e.target)
    ) {
      this._focusFirstItem();
    }
  }

  /**
   * Handles the ability to focus sidebar elements when it's open/closed to ensure that the sidebar is inert when
   * appropriate.
   */
  private _setFocused(): void {
    this._focusableElements = Array.from(
      this._elSidebar.nativeElement.querySelectorAll(
        this._focusableElementsString
      )
    ) as Array<HTMLElement>;

    if (this.opened) {
      this._focusedBeforeOpen = document.activeElement as HTMLElement;

      // Restore focusability, with previous tabindex attributes
      for (const el of this._focusableElements) {
        const prevTabIndex = el.getAttribute(this._tabIndexAttr);
        const wasTabIndexSet =
          el.getAttribute(this._tabIndexIndicatorAttr) !== null;
        if (prevTabIndex !== null) {
          el.setAttribute('tabindex', prevTabIndex);
          el.removeAttribute(this._tabIndexAttr);
        } else if (wasTabIndexSet) {
          el.removeAttribute('tabindex');
          el.removeAttribute(this._tabIndexIndicatorAttr);
        }
      }

      if (this.autoFocus) {
        this._focusFirstItem();
      }

      document.addEventListener('focus', this._onFocusTrap, true);
    } else {
      // Manually make all focusable elements unfocusable, saving existing tabindex attributes
      for (const el of this._focusableElements) {
        const existingTabIndex = el.getAttribute('tabindex');
        el.setAttribute('tabindex', '-1');
        el.setAttribute(this._tabIndexIndicatorAttr, '');

        if (existingTabIndex !== null) {
          el.setAttribute(this._tabIndexAttr, existingTabIndex);
        }
      }

      document.removeEventListener('focus', this._onFocusTrap, true);

      // Set focus back to element before the sidebar was opened
      if (this._focusedBeforeOpen && this.autoFocus && this._isModeOver) {
        this._focusedBeforeOpen.focus();
        this._focusedBeforeOpen = null;
      }
    }
  }

  // Close event handlers
  // ==============================================================================================

  /**
   * Initializes event handlers for the closeOnClickOutside and keyClose options.
   */
  private _initCloseListeners(): void {
    this._initCloseClickListener();
    this._initCloseKeyDownListener();
  }

  private _initCloseClickListener(): void {
    // In a timeout so that things render first
    setTimeout(() => {
      if (
        this.opened &&
        this.closeOnClickOutside &&
        !this._onClickOutsideAttached
      ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (document.addEventListener as any)(
          this._clickEvent,
          this._onClickOutside
        );
        this._onClickOutsideAttached = true;
      }
    });
  }

  private _initCloseKeyDownListener(): void {
    // In a timeout so that things render first
    setTimeout(() => {
      if (this.opened && this.keyClose && !this._onKeyDownAttached) {
        document.addEventListener('keydown', this._onKeyDown);
        this._onKeyDownAttached = true;
      }
    });
  }

  /**
   * Destroys all event handlers from _initCloseListeners.
   */
  private _destroyCloseListeners(): void {
    this._destroyCloseClickListener();
    this._destroyCloseKeyDownListener();
  }

  private _destroyCloseClickListener(): void {
    if (this._onClickOutsideAttached) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document.removeEventListener as any)(
        this._clickEvent,
        this._onClickOutside
      );
      this._onClickOutsideAttached = false;
    }
  }

  private _destroyCloseKeyDownListener(): void {
    if (this._onKeyDownAttached) {
      document.removeEventListener('keydown', this._onKeyDown);
      this._onKeyDownAttached = false;
    }
  }

  /**
   * Handles `click` events on anything while the sidebar is open for the closeOnClickOutside option.
   * Programatically closes the sidebar if a click occurs outside the sidebar.
   *
   * @param e {MouseEvent} Mouse click event.
   */
  private _onClickOutside(e: MouseEvent): void {
    if (
      this._onClickOutsideAttached &&
      this._elSidebar &&
      !this._elSidebar.nativeElement.contains(e.target)
    ) {
      this.close();
    }
  }

  /**
   * Handles the `keydown` event for the keyClose option.
   *
   * @param e {KeyboardEvent} Normalized keydown event.
   */
  private _onKeyDown(e: KeyboardEvent | Event): void {
    e = e || window.event;

    if ((e as KeyboardEvent).keyCode === this.keyCode) {
      this.close();
    }
  }

  // Auto collapse handlers
  // ==============================================================================================

  private _initCollapseListeners(): void {
    if (this.autoCollapseHeight || this.autoCollapseWidth) {
      // In a timeout so that things render first
      setTimeout(() => {
        if (!this._onResizeAttached) {
          window.addEventListener('resize', this._collapse);
          this._onResizeAttached = true;
        }
      });
    }
  }

  private _destroyCollapseListeners(): void {
    if (this._onResizeAttached) {
      window.removeEventListener('resize', this._collapse);
      this._onResizeAttached = false;
    }
  }

  private _collapse(): void {
    const winHeight: number = window.innerHeight;
    const winWidth: number = window.innerWidth;

    if (this.autoCollapseHeight) {
      if (winHeight <= this.autoCollapseHeight && this.opened) {
        this._wasCollapsed = true;
        this.close();
      } else if (winHeight > this.autoCollapseHeight && this._wasCollapsed) {
        this.open();
        this._wasCollapsed = false;
      }
    }

    if (this.autoCollapseWidth) {
      if (winWidth <= this.autoCollapseWidth && this.opened) {
        this._wasCollapsed = true;
        this.close();
      } else if (winWidth > this.autoCollapseWidth && this._wasCollapsed) {
        this.open();
        this._wasCollapsed = false;
      }
    }
  }

  // Helpers
  // ==============================================================================================

  /**
   * @internal
   *
   * Returns the rendered height of the sidebar (or the docked size).
   * This is used in the sidebar container.
   *
   * @return {number} Height of sidebar.
   */
  get _height(): number {
    if (this._elSidebar.nativeElement) {
      return this._isDocked
        ? this._dockedSize
        : this._elSidebar.nativeElement.offsetHeight;
    }

    return 0;
  }

  /**
   * @internal
   *
   * Returns the rendered width of the sidebar (or the docked size).
   * This is used in the sidebar container.
   *
   * @return {number} Width of sidebar.
   */
  get _width(): number {
    if (this._elSidebar.nativeElement) {
      return this._isDocked
        ? this._dockedSize
        : this._elSidebar.nativeElement.offsetWidth;
    }

    return 0;
  }

  /**
   * @internal
   *
   * Returns the docked size as a number.
   *
   * @return {number} Docked size.
   */
  get _dockedSize(): number {
    return parseFloat(this.dockedSize);
  }

  /**
   * @internal
   *
   * Returns whether the sidebar is over mode.
   *
   * @return {boolean} Sidebar's mode is "over".
   */
  get _isModeOver(): boolean {
    return this.mode === 'over';
  }

  /**
   * @internal
   *
   * Returns whether the sidebar is push mode.
   *
   * @return {boolean} Sidebar's mode is "push".
   */
  get _isModePush(): boolean {
    return this.mode === 'push';
  }

  /**
   * @internal
   *
   * Returns whether the sidebar is slide mode.
   *
   * @return {boolean} Sidebar's mode is "slide".
   */
  get _isModeSlide(): boolean {
    return this.mode === 'slide';
  }

  /**
   * @internal
   *
   * Returns whether the sidebar is "docked" -- i.e. it is closed but in dock mode.
   *
   * @return {boolean} Sidebar is docked.
   */
  get _isDocked(): boolean {
    return this.dock && this.dockedSize && !this.opened ? true : false;
  }

  /**
   * @internal
   *
   * Returns whether the sidebar is positioned at the left or top.
   *
   * @return {boolean} Sidebar is positioned at the left or top.
   */
  get _isLeftOrTop(): boolean {
    return this.position === 'left' || this.position === 'top';
  }

  /**
   * @internal
   *
   * Returns whether the sidebar is positioned at the left or right.
   *
   * @return {boolean} Sidebar is positioned at the left or right.
   */
  get _isLeftOrRight(): boolean {
    return this.position === 'left' || this.position === 'right';
  }

  /**
   * @internal
   *
   * Returns whether the sidebar is inert -- i.e. the contents cannot be focused.
   *
   * @return {boolean} Sidebar is inert.
   */
  get _isInert(): boolean {
    return !this.opened && !this.dock;
  }

  /**
   * "Normalizes" position. For example, "start" would be "left" if the page is LTR.
   */
  private _normalizePosition(): void {
    const ltr: boolean = isLTR();

    if (this.position === 'start') {
      this.position = ltr ? 'left' : 'right';
    } else if (this.position === 'end') {
      this.position = ltr ? 'right' : 'left';
    }
  }
}
