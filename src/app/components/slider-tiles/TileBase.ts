import { Input } from '@angular/core';

export class TileBase {
  props: string[] = [];

  @Input() set data(value: any) {
    const { image = '', headline = '', subhead = '', textLimits = {} } =
      value || {};
    this.textLimits = textLimits;
    this.image = image;
    this.headline = this.limitText(headline, this.getTextLimit('headline'));
    this.subhead = this.limitText(subhead, this.getTextLimit('subhead'));

    this.props.forEach(key => (this[key] = value[key]));
  }

  public image: string;
  public headline: string;
  public subhead: string;
  public textLimits: any;

  getTextLimit(key: string): number {
    return this.textLimits[key] || Infinity;
  }

  limitText(text: string, length: number = Infinity) {
    if (length === Infinity) {
      return text;
    }

    return text.substr(0, length);
  }
}
