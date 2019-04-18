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
    // TODO check all page configs if configured route links are valid

    const routeConfigs = (config.routes || []).filter(route => !route.disabled);

    this.routes = routeConfigs.map(({ path, page }) => ({
      path,
      component: PageComponent,
      data: { config: page }
    }));

    this.menuEntries = routeConfigs
      .filter(route => !!route.menu)
      .map(({ path, menu }) => ({ ...menu, link: path }));
  }
}
