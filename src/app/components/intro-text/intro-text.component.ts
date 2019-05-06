import { Component, Input } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

// tslint:disable-next-line: max-line-length
const matchHtml = /<((?=!\-\-)!\-\-[\s\S]*\-\-|((?=\?)\?[\s\S]*\?|((?=\/)\/[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*|[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:\s[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:=(?:"[^"]*"|'[^']*'|[^'"<\s]*))?)*)\s?\/?))>/i;

@Component({
  selector:
    'dai-intro-text .section__textbox .section-open-access .decoration-bg-lighter-gray',
  templateUrl: './intro-text.component.html',
  styleUrls: ['./intro-text.component.scss']
})
export class IntroTextComponent extends ConfigurableComponent {
  @Input()
  public title = '';
  @Input()
  public body = '';

  onSetConfig(config) {
    let { body } = config;
    const bodyHasHtml = body && body.match(matchHtml);
    if (!bodyHasHtml && config.body) {
      const bodyLimit = this.getTextLimit('body');
      body = `<p>${this.limitText(body, bodyLimit)}</p>`;
    }

    this.body = body;

    const titleLimit = this.getTextLimit('title');
    this.title = this.limitText(config.title, titleLimit);
  }
}
