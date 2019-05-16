import { Component, Inject } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouterEvent,
  NavigationStart
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

import * as $ from 'jquery';

@Component({
  selector: 'dai-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isPageLoaded = false;
  public showFooter = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
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

    // router.events.subscribe(e => {
    //   if (e => e instanceof NavigationStart) {
    //     console.log('nav start');
    //   } else if (e instanceof NavigationEnd) {
    //     s
    //   }
    // });

    this.interceptLinks();
  }

  interceptLinks() {
    const router = this.router;
    const isExternal = (href: string = '') => href.startsWith('http');
    const me = this;

    $(window).on('pageconfig_loaded', () => {
      me.isPageLoaded = true;
      me.showFooter = true;
    });

    $(document).on('click', 'a', function(e) {
      const href = $(this).attr('href');
      if (href === undefined) {
        return;
      }

      if (isExternal(href)) {
        e.preventDefault();
        // console.log('Link intercepted', href);
        window.open(href, 'blank');
      } else {
        me.showFooter = false;
        // console.log('hide footer');
        e.preventDefault();
        router.navigateByUrl(href);
      }
    });
  }
}
