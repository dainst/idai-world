import { DaiAppConfig } from './DaiAppConfig';

export class AppConfigLoader {
  static loadJson(path) {
    return fetch(path).then(response => response.json());
  }

  static loadAppConfig(
    path: string = 'config/app.json'
  ): Promise<DaiAppConfig> {
    return this.loadJson(path).then(config => new DaiAppConfig(config));
  }
}
