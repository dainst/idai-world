import { Component } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

@Component({
  selector:
    'dai-info-box .section__systems .systems-link .section-publications .decoration-bg-blue',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent extends ConfigurableComponent {
  public content: any[];

  public headlineLimit: number;
  public contentTextLimit: number;

  onSetConfig(config) {
    let content = config.content;
    if (!Array.isArray(content)) {
      content = [content];
    }

    this.content = content.map(item => item);

    this.headlineLimit = this.getTextLimit('headline');
    this.contentTextLimit = this.getTextLimit('text');
  }
}
