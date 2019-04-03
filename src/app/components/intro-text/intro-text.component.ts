import { Component } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

@Component({
  selector: 'dai-intro-text',
  templateUrl: './intro-text.component.html',
  styleUrls: ['./intro-text.component.scss']
})
export class IntroTextComponent extends ConfigurableComponent {
  public title = '';
  public body = '';

  constructor() {
    super();
  }

  onSetConfig(config) {
    this.title = config.title;
    this.body = config.body;
  }
}
