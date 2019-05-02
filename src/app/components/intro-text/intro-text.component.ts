import { Component, Input, HostBinding } from '@angular/core';
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
  // @HostBinding('class.section__textbox') someField: boolean = false;
  // section__textbox section-open-access decoration-bg-lighter-gray

  @Input()
  public title = '';
  @Input()
  public body = '';

  constructor() {
    super();
  }

  onSetConfig(config) {
    let { body } = config;
    const bodyHasHtml = body && body.match(matchHtml);
    if (!bodyHasHtml && config.body) {
      body = `<p>${body}</p>`;
    }
    this.title = config.title;
    this.body = body;
  }
}
