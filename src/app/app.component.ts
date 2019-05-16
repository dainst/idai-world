import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dai-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document, router: Router) {
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
  }
}
