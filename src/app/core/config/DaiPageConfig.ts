import { Type } from '@angular/core';
import { ComponentResolver } from '../service/component-resolver.service';

export interface SubnavItemConfig {
  route: string;
  image: string;
  title: string;
}
export interface TitleBannerConfig {
  title: string;
  image: string;
}

export type BannerConfig = SubnavItemConfig | TitleBannerConfig;

export interface PageConfig {
  banner?: BannerConfig;
  components: ComponentDefinition[];
}

export interface ComponentDefinition {
  type: string;
}

export interface ComponentTypeConfig {
  type: Type<any>;
  config: any;
}

export class DaiPageConfig {
  bannerConfig: BannerConfig;

  componentConfigs: ComponentTypeConfig[];

  constructor(
    config: ComponentDefinition[] | PageConfig,
    resolver: ComponentResolver
  ) {
    const pageConfig: PageConfig = Array.isArray(config)
      ? { components: config }
      : config;
    const componentDefs = pageConfig.components;

    this.bannerConfig = pageConfig.banner;

    this.componentConfigs = componentDefs
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
