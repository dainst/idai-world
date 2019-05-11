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
}
