import { merge, cloneDeep } from 'lodash';

export class TextLimits {
  globalTextLimits: any = {};

  constructor(limits) {
    this.globalTextLimits = limits;
  }

  getLimitsFor(componentConfig: any): any {
    // limits defined in component override global limits
    const limits = merge(
      cloneDeep(this.globalTextLimits[componentConfig.type]),
      componentConfig.textLimits || {}
    );
    return limits || {};
  }
}
