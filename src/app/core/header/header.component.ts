import { Component, OnInit } from '@angular/core';
import { DaiAppConfig } from '../config/DaiAppConfig';
import { MenuEntry } from '../model/MenuEntry';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dai-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSubPage: boolean;
  navigationActive: boolean;
  links: MenuEntry[];

  constructor(private router: Router, private config: DaiAppConfig) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        const isHome: boolean = event.url === '/';

        this.isSubPage = !isHome;
      });

    this.createMenuEntries();
  }

  ngOnInit() {}

  onNavTriggerClick(event) {
    this.navigationActive = !this.navigationActive;
  }

  createMenuEntries() {
    this.router.config.unshift(...this.config.routes);
    this.links = this.config.menuEntries;
  }
}
