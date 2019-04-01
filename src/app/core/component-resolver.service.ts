import { Type } from '@angular/core';

export class ComponentResolver {
  private typeMap: { [componentId: string]: Type<any> } = {};

  constructor(typeMap) {
    this.typeMap = typeMap;
  }

  resolve(name: string) {
    const type = this.typeMap[name];
    return type;
  }
}
