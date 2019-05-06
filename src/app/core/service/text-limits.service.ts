export class TextLimits {
  globalTextLimits: any = {};

  constructor(limits) {
    this.globalTextLimits = limits;
  }

  getLimitsFor(componentType: string): any {
    // limits defined in component override global limits
    const globalLimits = this.globalTextLimits[componentType];
    return globalLimits || {};
  }
}
