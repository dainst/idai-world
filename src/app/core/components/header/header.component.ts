import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  HostBinding
} from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import {
  filter,
  throttleTime,
  map,
  distinctUntilChanged,
  startWith
} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { clamp } from 'lodash';

@Component({
  selector: 'dai-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @HostBinding('class.shrink') pastThreshold = false;
  @ViewChild('header') headerElement: ElementRef;
  @ViewChild('headerInner') headerInnerElement: ElementRef;

  isSubPage = false;

  bgColor = '';

  constructor(private router: Router, private zone: NgZone) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        const isHome: boolean = event.url === '/';

        this.isSubPage = !isHome;
      });
  }

  ngAfterViewInit() {
    const threshhold = this.headerElement.nativeElement.offsetHeight;
    const maxHeight = threshhold * 1.5;

    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset > threshhold),
      distinctUntilChanged(),
      startWith(window.pageYOffset > threshhold)
    );

    scroll$.subscribe((pastThreshold: boolean) => {
      this.pastThreshold = pastThreshold;
    });

    this.zone.runOutsideAngular(() => {
      const alpha$ = fromEvent(window, 'scroll').pipe(
        map(() => window.pageYOffset),
        map(offsetY => clamp(offsetY, 0, maxHeight) / maxHeight),
        distinctUntilChanged()
      );

      alpha$.subscribe(alpha => {
        alpha = clamp(alpha, 0.95);
        const background = `linear-gradient(to right, rgba(106,164,184,${alpha}) 0%,rgba(71,123,199,${alpha}) 100%)`;
        this.headerInnerElement.nativeElement.style.backgroundImage = background;
      });
    });
  }
}
