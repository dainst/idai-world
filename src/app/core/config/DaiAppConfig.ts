import { Routes } from '@angular/router';
import { PageComponent } from '../page/page.component';
import { MenuEntry } from '../model/MenuEntry';

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
