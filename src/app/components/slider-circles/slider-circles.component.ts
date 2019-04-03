import { Component, OnInit } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

@Component({
  selector: 'dai-slider-circles',
  templateUrl: './slider-circles.component.html',
  styleUrls: ['./slider-circles.component.scss']
})
export class SliderCirclesComponent extends ConfigurableComponent
  implements OnInit {
  constructor() {
    super();
  }
}
