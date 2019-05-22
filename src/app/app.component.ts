import { Component, Inject } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouterEvent,
  NavigationStart
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Angulartics2Piwik } from 'angulartics2/piwik';

import * as $ from 'jquery';

@Component({
  selector: 'dai-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isPageLoaded = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private angulartics2Piwik: Angulartics2Piwik
  ) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        const isHome = event.url === '' || event.url === '/';
        if (!isHome) {
          this.document.body.classList.add('subpage');
          this.document.body.classList.remove('isHome');
        } else {
          this.document.body.classList.remove('subpage');
          this.document.body.classList.add('isHome');
        }
      });

    angulartics2Piwik.startTracking();

    this.interceptLinks();
  }

  interceptLinks() {
    const router = this.router;
    const isExternal = (href: string = '') => href.startsWith('http');
    const me = this;

    $(window).on('pageconfig_loaded', () => {
      me.isPageLoaded = true;
    });

    $(document).on('click', 'a', function(e) {
      const href = $(this).attr('href');
      if (href === undefined) {
        return;
      }

      if (isExternal(href)) {
        e.preventDefault();

        window.open(href, 'blank');
      } else {
        e.preventDefault();
        router.navigateByUrl(href);
      }
    });
  }
}
