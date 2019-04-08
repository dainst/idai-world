import { Component, Input } from '@angular/core';
import { LinkConfig } from '../../model/LinkConfig';
import { parseLink, LinkType } from '../../utils/linkParser';

@Component({
  selector: 'dai-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  LinkType = LinkType;

  @Input() set data(value: LinkConfig) {
    const { target = '', text = '' } = value || {};
    this.text = text;
    const link = parseLink(target);
    this.type = link.type;
    this.link = link.link;
  }

  type: string;
  link: string;
  text: string;

  constructor() {}
}
