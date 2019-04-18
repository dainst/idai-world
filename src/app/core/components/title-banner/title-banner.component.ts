import { Component, Input } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

@Component({
  selector: 'dai-title-banner',
  templateUrl: './title-banner.component.html',
  styleUrls: ['./title-banner.component.scss']
})
export class TitleBannerComponent extends ConfigurableComponent {
  @Input() title: string;
  @Input() image: string;

  onSetConfig(config) {
    this.title = config.title;
    this.image = config.image;
  }
}
