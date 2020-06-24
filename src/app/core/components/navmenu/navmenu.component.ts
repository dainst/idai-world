import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { clamp } from 'lodash';
import { MenuTree } from '../../model/MenuTree';
import { MenuEntry } from '../../model/MenuEntry';
import { build } from '../../utils/menuBuilder';

@Component({
  selector: 'dai-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {
  @Input() items: MenuTree;
  @Input() level = 0;
  @Input() groupClassProvider: (items: MenuTree) => string;
  @Output() linkClick: EventEmitter<any> = new EventEmitter();

  public groupClass = '';

  public bgClasses = [
    'decoration-bg-light-gray',
    'decoration-bg-gray',
    'decoration-bg-dark-gray'
  ];

  ngOnInit() {}

  getColumnSize() {
    return clamp(Math.round(12 / this.items.length), 2, 12);
  }

  getGroupClass() {
    if (this.groupClassProvider && this.items) {
      return this.groupClassProvider(this.items);
    }
    return `col-md-${this.getColumnSize()}`;
  }

  @Input()
  public set entries(entries: MenuEntry[]) {
    this.items = build(entries);
    this.groupClass = this.getGroupClass();
  }

  onLinkClick(link) {
    this.linkClick.emit(link);
  }

  public getBgClass(index: number, level: number) {
    const classes =
      (index === 0 && level === 0 ? 'nav-first ' : ' ') +
      this.bgClasses[index % this.bgClasses.length];
    return classes;
    // {
    //   'nav--first': idx === 0 && level === 0,
    //   [bgClasses[bgClasses.length%idx]] === true
    // }
  }
}
