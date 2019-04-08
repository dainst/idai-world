import { Component, Input } from '@angular/core';
import { TileBase } from '../TileBase';

@Component({
  selector: 'dai-image-link-tile',
  templateUrl: './image-link-tile.component.html',
  styleUrls: ['./image-link-tile.component.scss']
})
export class ImageLinkTileComponent extends TileBase {
  props = ['link'];

  @Input() public link: string;
}
