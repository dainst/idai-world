import { Component, OnInit } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

@Component({
  selector: 'dai-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.scss']
})
export class SubNavigationComponent extends ConfigurableComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    console.log('config', this.config);
  }
}
