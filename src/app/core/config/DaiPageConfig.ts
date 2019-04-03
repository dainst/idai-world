import { Type } from '@angular/core';
import { ComponentResolver } from '../service/component-resolver.service';

export interface ComponentDefinition {
  type: string;
}

export interface ComponentTypeConfig {
  type: Type<any>;
  config: any;
}

export class DaiPageConfig {
  private definitions: ComponentDefinition[];

  componentConfigs: ComponentTypeConfig[];

  constructor(config: ComponentDefinition[], resolver: ComponentResolver) {
    this.definitions = config;
    this.componentConfigs = config
      .map(definition => {
        const type = resolver.resolve(definition.type);

        if (!type) {
          console.warn(
            `could not resolve component for type ${definition.type}`
          );
        }

        return {
          type,
          config: { ...definition }
        };
      })
      .filter(comp => !!comp.type);
  }
}
