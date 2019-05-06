import { Injectable, Inject } from '@angular/core';

import { DaiPageConfig, ComponentDefinition } from '../config/DaiPageConfig';
import { HttpClient } from '@angular/common/http';
import { ComponentResolver } from './component-resolver.service';
import { TextLimits } from './text-limits.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {
  private configs: { [key: string]: any } = {};

  constructor(
    private http: HttpClient,
    private resolver: ComponentResolver,
    private limits: TextLimits
  ) {}

  async getConfig(path: string): Promise<DaiPageConfig> {
    let config = this.configs[path];

    if (!config) {
      config = await this.loadPageConfig(path).catch(e => {
        console.error(e);
      });
      this.configs[path] = config;
    }

    return config;
  }

  private loadPageConfig(path: string = ''): Promise<DaiPageConfig> {
    if (!path) {
      return Promise.reject('no path given');
    }
    return this.http
      .get<ComponentDefinition[]>(path)
      .toPromise()
      .then(config => this.processConfig(config))
      .then(config => new DaiPageConfig(config, this.resolver, this.limits));
  }

  private async processConfig(config) {
    const components = Array.isArray(config) ? config : config.components;

    await Promise.all(
      components.map(definition => {
        return Promise.all(
          Object.keys(definition)
            .filter(key => key.endsWith('_html'))
            .map(this.resolveHtml(definition))
        );
      })
    );
    return config;
  }

  private resolveHtml = definition => key => {
    const filePath = definition[key];

    return this.loadHtml(filePath).then(r => {
      key = key.replace('_html', '');
      if (r) {
        definition[key] = r;
      } else {
        definition[key] =
          '<div class="alert alert-warning">error loading template file from ' +
          filePath +
          '</div>';
      }
    });
  }

  private loadHtml(path: string = '') {
    if (!path) {
      return Promise.reject('no path given');
    }

    return this.http
      .get(path, { responseType: 'text' })
      .toPromise()
      .catch(e => {});
  }
}
