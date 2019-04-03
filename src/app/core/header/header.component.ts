import { Component, OnInit } from '@angular/core';
import { DaiAppConfig, MenuEntry } from '../config/DaiAppConfig';
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

  test = [
    {
      name: 'FOO',
      items: [
        { name: 'ITEM 1', link: 'foo' },
        { name: 'ITEM 2', link: 'foo' },
        {
          name: 'FOOBAR',
          items: [
            { name: 'FB 1', link: 'foo' },
            { name: 'FB 2', link: 'foo' },
            {
              name: 'FOOBAR_1',
              items: [
                { name: 'FB 1_2', link: 'foo' },
                { name: 'FB 1_2', link: 'foo' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'BAR',
      items: [
        { name: 'BAR ITEM 1', link: 'foo' },
        { name: 'BAR ITEM 2', link: 'foo' }
      ]
    },
    {
      name: 'BAZ',
      items: [
        { name: 'BAZ ITEM 1', link: 'foo' },
        { name: 'BAZ ITEM 2', link: 'foo' }
      ]
    }
    // { name: 'BAZ', items: [{ name: 'BAZ ITEM 1' }, { name: 'BAZ ITEM 2' }] },
    // { name: 'BAZ', items: [{ name: 'BAZ ITEM 1' }, { name: 'BAZ ITEM 2' }] }
  ];

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
