import { Component, OnInit, Input } from '@angular/core';
import { clamp } from 'lodash';
import { MenuEntry } from '../model/MenuEntry';
import { build } from '../utils/menuBuilder';
import { MenuTree } from '../model/MenuTree';

@Component({
  selector: 'dai-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {
  @Input() items: MenuTree;
  @Input() level = 0;

  ngOnInit() {}

  getColumnSize() {
    return clamp(Math.round(12 / this.items.length), 2, 12);
  }

  @Input()
  public set entries(entries: MenuEntry[]) {
    this.items = build(entries);
  }
}
