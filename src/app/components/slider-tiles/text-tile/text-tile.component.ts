import { Component, Input } from '@angular/core';
import { TileBase } from '../TileBase';

@Component({
  selector: 'dai-text-tile',
  templateUrl: './text-tile.component.html',
  styleUrls: ['./text-tile.component.scss']
})
export class TextTileComponent extends TileBase {
  props = ['text'];

  @Input() public text: any;
}
