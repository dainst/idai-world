import { Input } from '@angular/core';

export class ConfigurableComponent<T = any> {
  @Input() type: string;

  private _config: T;
  @Input() set config(value: T) {
    this._config = value;
    this.onSetConfig(value);
  }
  get config(): T {
    return this._config;
  }

  // constructor(public limits: TextLimits) {}

  onSetConfig(config: T) {}

  getTextLimit(key: string): number {
    // this.limits.getLimitsFor(key, this.config);
    // return this.limits[key] || Infinity;
    return (this.config as any).textLimits[key] || Infinity;
  }

  limitText(text: string, length: number = Infinity) {
    if (length === Infinity) {
      return text;
    }

    return text.substr(0, length);
  }
}
