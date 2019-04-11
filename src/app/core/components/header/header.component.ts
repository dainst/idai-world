import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DaiAppConfig } from '../../config/DaiAppConfig';

@Component({
  selector: 'dai-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSubPage: boolean;

  constructor(private router: Router, private config: DaiAppConfig) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        const isHome: boolean = event.url === '/';

        this.isSubPage = !isHome;
      });

    // TODO move this to routing module
    this.router.config.unshift(...this.config.routes);
  }

  ngOnInit() {}
}