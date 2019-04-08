import { Component, Input } from '@angular/core';
import { TileBase } from '../TileBase';
import { LinkConfig } from 'src/app/core/model/LinkConfig';

@Component({
  selector: 'dai-link-list-tile',
  templateUrl: './link-list-tile.component.html',
  styleUrls: ['./link-list-tile.component.scss']
})
export class LinkListTileComponent extends TileBase {
  props = ['links'];

  @Input() public links: LinkConfig[];
}
