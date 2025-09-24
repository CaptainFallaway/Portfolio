import { ScrollDetector, type ScrollDirection } from "./scrollDetector";

class ScrollManager {
  private currentSectionIndex: number = 0;
  private sections: string[];

  // This exist because sometimes the scroll animation doesn't complete as expected 
  private readonly MAX_SCROLL_DURATION = 600;

  private promiseResolveCallbacks: Array<() => void> = [];
  private scrollTimeouts: NodeJS.Timeout[] = [];

  private detector: ScrollDetector;

  constructor(...sections: string[]) {
    this.sections = sections;

    // Preserve context for event handlers
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);

    this.detector = new ScrollDetector(this.onScroll);
  }

  /**
  * Attaches event listeners for scroll detection and window resizing.
  * Initializes scroll detection and adds a resize event listener to the window.
  */
  attachListener() {
    this.detector.attach();
    window.addEventListener('resize', this.onResize);
  }

  /**
   * Detaches the scroll and resize event listeners.
   * This method should be called when the component is being unmounted or cleanup is needed.
   */
  detachListener() {
    this.detector.detach();
    window.removeEventListener('resize', this.onResize);
  }

  private cancelOtherScrolls() {
    this.scrollTimeouts.forEach(timeout => clearTimeout(timeout));
    this.scrollTimeouts = [];
    this.promiseResolveCallbacks.forEach(f => f());
    this.promiseResolveCallbacks = [];
    this.detector.setDetecting(false);
  }

  /**
   * Smoothly scrolls to a section identified by its ID and returns a promise that resolves when the scroll animation is complete.
   * During the scroll operation, scroll detection is temporarily disabled to prevent interference.
   * 
   * @param id - The HTML element ID of the section to scroll to
   * @returns A Promise that resolves when the scroll animation is complete
   * @throws Error if an element with the specified ID is not found in the document
   * 
   * @example
   * ```typescript
   * await scrollManager.scrollToSection('section1');
   * // Scroll animation is now complete
   * ```
   */
  async scrollToSection(id: string): Promise<void> {
    this.cancelOtherScrolls();

    // We change the current section in this method because this method is also externally callable
    this.currentSectionIndex = this.sections.indexOf(id);

    // This promise trap blocks until the scrolling animation is done
    return new Promise<void>((resolve, reject) => {
      const element = document.getElementById(id);

      this.promiseResolveCallbacks.push(resolve);

      if (!element) {
        reject(new Error(`Element with id "${id}" not found.`));
        return;
      }

      this.detector.setDetecting(true);

      // Failsafe timeout in case the the position check never resolves mostly because of a user interaction
      const timeout = setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        resolve();
        this.detector.setDetecting(false);
      }, this.MAX_SCROLL_DURATION);

      this.scrollTimeouts.push(timeout);

      const checkPosition = () => {
        const elementRect = element.getBoundingClientRect();
        if (Math.abs(elementRect.top) < 1) {
          resolve();
          clearTimeout(timeout);
          this.detector.setDetecting(false);
        } else {
          requestAnimationFrame(checkPosition);
        }
      };

      element.scrollIntoView({ behavior: "smooth" });
      requestAnimationFrame(checkPosition);
    });
  }

  private async onResize() {
    await this.scrollToSection(this.sections[this.currentSectionIndex]);
  }

  private async onScroll(direction: ScrollDirection): Promise<void> {
    if (direction === "down") {
      await this.scrollDown();
    }

    if (direction === "up") {
      await this.scrollUp();
    }
  }

  private async scrollDown() {
    if (this.currentSectionIndex < this.sections.length - 1) {
      await this.scrollToSection(this.sections[this.currentSectionIndex + 1]);
    }
  }

  private async scrollUp() {
    if (this.currentSectionIndex > 0) {
      await this.scrollToSection(this.sections[this.currentSectionIndex - 1]);
    }
  }

}

const scrollManager = new ScrollManager("hello", "about", "socials");
export default scrollManager;