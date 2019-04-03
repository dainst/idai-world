import { Routes } from '@angular/router';

import { MenuEntry } from '../model/MenuEntry';
import { PageComponent } from '../components/page/page.component';

export class DaiAppConfig {
  public routes: Routes;
  public menuEntries: MenuEntry[];

  private config: object;

  constructor(config: object) {
    this.config = config;

    this.parse(config);
  }

  parse(config) {
    this.routes = (config.routes || []).map(({ path, page }) => ({
      path,
      component: PageComponent,
      data: { config: page }
    }));

    this.menuEntries = (config.routes || [])
      .filter(route => !!route.menu)
      .map(({ path, menu }) => ({ ...menu, link: path }));
  }
}
