import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[daiComponentSlot]'
})
export class ComponentSlotDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
