import { Injectable } from '@angular/core';

import { DaiPageConfig, ComponentDefinition } from '../config/DaiPageConfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComponentResolver } from './component-resolver.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {
  private configs: { [key: string]: any } = {};

  constructor(private http: HttpClient, private resolver: ComponentResolver) {}

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
      .then(config => new DaiPageConfig(config, this.resolver));
  }

  private async processConfig(config) {
    await Promise.all(
      config.map(definition =>
        Promise.all(
          Object.keys(definition)
            .filter(key => key.endsWith('_html'))
            .map(key => {
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
            })
        )
      )
    );
    return config;
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
