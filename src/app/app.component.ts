import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DaiAppConfig, MenuEntry } from './core/config/DaiAppConfig';

@Component({
  selector: 'dai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idai';

  links: MenuEntry[] = [];

  constructor(private router: Router, private config: DaiAppConfig) {
    this.router.config.unshift(...config.routes);
    this.links = config.menuEntries;
  }
}
