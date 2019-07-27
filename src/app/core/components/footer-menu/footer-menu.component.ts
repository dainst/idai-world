import { clamp } from 'lodash';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DaiAppConfig } from '../../config/DaiAppConfig';
import { MenuTree } from '../../model/MenuTree';
import { MenuEntry } from '../../model/MenuEntry';

@Component({
  selector: 'dai-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterMenuComponent implements OnInit {
  public menuEntries: MenuEntry[];
  public groupClass: string;

  constructor(private config: DaiAppConfig) {}

  ngOnInit() {
    this.menuEntries = [{ group: '', link: '/', name: 'Home' }, ...this.config.menuEntries];
  }

  getColumnSize(menuTree: MenuTree) {
    return clamp(Math.round(12 / menuTree.length), 2, 12);
  }

  getGroupClass = (menuTree: MenuTree) => {
    return `col-sm-${this.getColumnSize(menuTree)}`;
  }
}
