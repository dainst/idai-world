import { Injectable } from '@angular/core';

import { DaiPageConfig, ComponentDefinition } from './config/DaiPageConfig';
import { HttpClient } from '@angular/common/http';
import { ComponentResolver } from './component-resolver.service';
import { empty } from 'rxjs';

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
      .then(config => new DaiPageConfig(config, this.resolver));
  }
}
