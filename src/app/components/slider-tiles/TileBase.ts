import { Input } from '@angular/core';

export class TileBase {
  props: string[] = [];

  @Input() set data(value: any) {
    const { image = '', headline = '', subhead = '' } = value || {};
    this.image = image;
    this.headline = headline;
    this.subhead = subhead;

    this.props.forEach(key => (this[key] = value[key]));
  }

  public image: string;
  public headline: string;
  public subhead: string;
}
