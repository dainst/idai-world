import { Input, AfterViewInit, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export class TileBase implements AfterViewInit, OnInit, OnDestroy {
  @Input() set data(value: any) {
    const { image = '', headline = '', subhead = '', textLimits = {} } = value || {};
    this.textLimits = textLimits;
    this.image = image;
    this.headline = this.limitText(headline, this.getTextLimit('headline'));
    this.subhead = this.limitText(subhead, this.getTextLimit('subhead'));

    this.props.forEach(key => (this[key] = value[key]));
  }

  constructor(private element: ElementRef) {}
  props: string[] = [];

  public image: string;
  public headline: string;
  public subhead: string;
  public textLimits: any;

  private subscriptions: Subscription = new Subscription();

  ngOnInit() {
    this.subscriptions.add(
      fromEvent(window, 'resize')
        .pipe(debounceTime(300))
        .subscribe(() => {
          this.checkTextBounds();
        })
    );
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private checkTextBounds() {
    const headlineElement: HTMLElement = this.findElement('.headline');

    if (headlineElement) {
      const headlineStyles = window.getComputedStyle(headlineElement);

      const textWidth = this.measureText(this.headline, headlineStyles.font);
      const headlineWidth = headlineElement.offsetWidth;
      const subheadElement: HTMLElement = this.findElement('.subhead');
      if (subheadElement && textWidth > headlineWidth) {
        // the headline text is bigger that one line
        // => hide the subhead
        // => allow the headline to be two lines
        subheadElement.style.visibility = 'hidden';

        const newLineHeight = parseFloat(headlineStyles.lineHeight) * 2 + 'px';
        headlineElement.style.maxHeight = headlineElement.style.height = newLineHeight;
      } else if (subheadElement) {
        // all good
        // undo any changes
        delete subheadElement.style.visibility;
        delete headlineElement.style.maxHeight;
      }
    }
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.checkTextBounds();
    }, 0);
  }

  getTextLimit(key: string): number {
    let limit = this.textLimits[key] || Infinity;

    const rules = Object.keys(this.textLimits)
      .filter(prop => prop.includes('+') && prop.includes(key))
      .map(key => ({ key, value: this.textLimits[key] }));

    if (rules.length) {
      rules.forEach(rule => {
        const props = rule.key.split('+');
        const allPropsArePresent = props.every(prop => this[prop]);
        if (allPropsArePresent) {
          limit = rule.value[props.indexOf(key)];
        }
      });
    }

    return limit;
  }

  limitText(text: string, length: number = Infinity) {
    if (length === Infinity) {
      return text;
    }

    return text.substr(0, length);
  }

  measureText(text, font) {
    return Math.floor(getTextWidth(text, font));
  }

  private findElement(selector: string): HTMLElement {
    return this.element.nativeElement.querySelector(selector);
  }
}

// https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
  // re-use canvas object for better performance

  // @ts-ignore
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}
