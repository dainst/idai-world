import { Input, OnInit } from '@angular/core';

export class ConfigurableComponent<T = any> {
  // tslint:disable-next-line: variable-name
  private _config: T;
  @Input() set config(value: T) {
    this._config = value;
    this.onSetConfig(value);
  }
  get config(): T {
    return this._config;
  }

  onSetConfig(config: T) {}
}
