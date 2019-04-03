import { Input, OnInit } from '@angular/core';

export class ConfigurableComponent implements OnInit {
  @Input() foo: any;

  private _config: any;
  @Input() set config(value: any) {
    // console.log(`[${this.constructor.name}] config:`, value);
    this._config = value;
    this.onSetConfig(value);
  }
  get config() {
    return this._config;
  }

  ngOnInit() {
    console.log(`[${this.constructor.name}] initialized`);
  }

  onSetConfig(config) {}
}
