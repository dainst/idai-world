import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

import * as $ from 'jquery';

@Component({
  selector: 'dai-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

    this.interceptLinks();
  }

  interceptLinks() {
    const router = this.router;
    const isExternal = (href: string = '') => href.startsWith('http');

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
        e.preventDefault();
        router.navigateByUrl(href);
      }
    });
  }
}
