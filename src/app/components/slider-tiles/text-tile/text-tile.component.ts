import { Component, Input } from '@angular/core';
import { TileBase } from '../TileBase';
import { LinkConfig } from 'src/app/core/model/LinkConfig';

@Component({
  selector: 'dai-text-tile',
  templateUrl: './text-tile.component.html',
  styleUrls: ['./text-tile.component.scss']
})
export class TextTileComponent extends TileBase {
  props = ['text', 'link'];

  @Input() public text: string;
  @Input() public link: LinkConfig;
}
