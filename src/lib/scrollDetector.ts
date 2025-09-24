export type ScrollDirection = 'up' | 'down';

export type ScrollCallback = (direction: ScrollDirection) => Promise<void>;

export class ScrollDetector {
  // Keep track of the initial touch when touch event is started
  private touchStartY: number = 0;
  private readonly TOUCH_THRESHOLD = 50;

  // This state makes sure we don't trigger additional callbacks whilst the site is programmatically scrolling
  private isDetecting: boolean = false;
  // This state prevents multiple scroll events from a touch swipe gesture
  private hasTouchScrolled: boolean = false;

  private callback: ScrollCallback;

  constructor(callback: ScrollCallback) {
    this.callback = callback;

    // Bind methods to preserve context
    this.handleWheel = this.handleWheel.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  /**
   * Attaches event listeners for all scroll-related events to the window object.
   * 
   * These event listeners handle scrolling behavior for:
   * - Mouse wheel
   * - Touch interactions
   * - Middle mouse button
   * - Keyboard navigation
   * - Native scroll events
   * 
   * Event listeners are set to non-passive to allow for preventDefault() calls.
   */
  attach() {
    // Mouse and touch events
    window.addEventListener('wheel', this.handleWheel, { passive: false });
    window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    window.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    window.addEventListener('mousedown', this.handleMouseDown, { passive: false });

    // Keyboard navigation
    window.addEventListener('keyup', this.handleKeyUp, { passive: false });
  }

  /**
   * Removes all event listeners from the window.
   * Call this method to cleanup when the scroll detection is no longer needed.
   */
  detach() {
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchend', this.handleTouchEnd);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  /**
   * Sets the detecting state of the scroll detector.
   * 
   * This method shold be called when programatically scrolling to avoid triggering the callback again.
   * @param state - Boolean value to set the detecting state
   */
  setDetecting(state: boolean) {
    this.isDetecting = state;
  }

  private handleWheel(e: WheelEvent) {
    e.preventDefault();
    if (this.isDetecting) return;

    const direction: ScrollDirection = e.deltaY > 0 ? 'down' : 'up';
    this.callback(direction);
  }

  private handleTouchStart(e: TouchEvent) {
    e.preventDefault();
    this.touchStartY = e.touches[0].clientY;
  }

  private handleTouchMove(e: TouchEvent) {
    e.preventDefault();
    if (this.isDetecting || this.hasTouchScrolled) return;

    const touchY = e.touches[0].clientY;
    const deltaY = this.touchStartY - touchY;

    if (Math.abs(deltaY) > this.TOUCH_THRESHOLD) {
      const direction: ScrollDirection = deltaY > 0 ? 'down' : 'up';
      this.callback(direction);
      this.hasTouchScrolled = true;
      // this.touchStartY = touchY;
    }
  }

  private handleTouchEnd(e: TouchEvent) {
    e.preventDefault();
    this.touchStartY = 0;
    this.hasTouchScrolled = false;
  }

  private handleMouseDown(e: MouseEvent) {
    // Middle mouse button (button 1)
    if (e.button === 1) {
      e.preventDefault();
    }
  }

  private handleKeyUp(e: KeyboardEvent) {
    if (this.isDetecting) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        this.callback('down');
        break;
      case 'ArrowUp':
      case 'PageUp':
        this.callback('up');
        break;
    }
  }
}