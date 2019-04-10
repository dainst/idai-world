import { Input, OnInit } from '@angular/core';

export class ConfigurableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _config: any;
  @Input() set config(value: any) {
    this._config = value;
    this.onSetConfig(value);
  }
  get config() {
    return this._config;
  }

  ngOnInit() {}

  onSetConfig(config) {}
}
