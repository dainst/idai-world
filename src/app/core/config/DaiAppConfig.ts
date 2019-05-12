import { Routes } from '@angular/router';

import { MenuEntry } from '../model/MenuEntry';
import { PageComponent } from '../components/page/page.component';
import { pick } from 'lodash';
export class DaiAppConfig {
  public routes: Routes;
  public menuEntries: MenuEntry[];
  public textLimits: any = {};
  public globals: object;

  private config: object;

  constructor(config: object) {
    this.config = config;

    this.parse(config);
  }

  parse(config) {
    const routeConfigs = (config.routes || []).filter(route => !route.disabled);

    this.routes = routeConfigs.map(({ path, page }) => ({
      path,
      component: PageComponent,
      data: { config: page }
    }));

    const defaultRoute = config.routes.find(route => (route as any).default);
    if (defaultRoute) {
      this.routes.push({
        path: '**',
        redirectTo: defaultRoute.path,
        pathMatch: 'full'
      });
    }

    this.menuEntries = routeConfigs
      .filter(route => !!route.menu)
      .map(({ path, menu }) => ({ ...menu, link: path }));

    const globals = pick(
      config,
      Object.keys(config).filter(key => !['routes'].includes(key))
    );

    console.log(globals);
    this.globals = globals;

    this.textLimits = config.text_limits || {};
  }
}
