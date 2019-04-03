import { Component, OnInit } from '@angular/core';
import { DaiAppConfig } from '../../config/DaiAppConfig';
import { MenuEntry } from '../../model/MenuEntry';

@Component({
  selector: 'dai-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationActive: boolean;
  links: MenuEntry[];

  constructor(private config: DaiAppConfig) {
    this.createMenuEntries();
  }

  ngOnInit() {}

  onNavTriggerClick(event) {
    this.navigationActive = !this.navigationActive;
  }

  onLinkClick(link) {
    this.navigationActive = false;
  }

  createMenuEntries() {
    this.links = this.config.menuEntries;
  }
}
