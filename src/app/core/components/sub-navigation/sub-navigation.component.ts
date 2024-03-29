import { Component, OnInit, Input } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

@Component({
  selector: 'dai-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.scss']
})
export class SubNavigationComponent extends ConfigurableComponent {
  @Input() items: any[] = [];

  onSetConfig(config) {
    this.items = config ? config.items : [];
  }
}
