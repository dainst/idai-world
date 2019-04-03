import { Component, OnInit, Input } from '@angular/core';
import { clamp } from 'lodash';

@Component({
  selector: 'dai-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {
  @Input() items;
  @Input() level = 0;

  ngOnInit() {}

  getColumnSize() {
    return clamp(Math.round(12 / this.items.length), 2, 12);
  }
}
