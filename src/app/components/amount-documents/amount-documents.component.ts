import { Component, OnInit } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';
import { HttpClient } from '@angular/common/http';

import { get } from 'lodash';

interface EndpointConfig {
  url: string;
  resultProp?: string;
  transform?: string; // funtion to transform response
}

interface AmountComponentConfig {
  endpoint: EndpointConfig;
}
@Component({
  selector: 'dai-amount-docs .section__amount-docs .decoration-bg-lighter-gray',
  templateUrl: './amount-documents.component.html',
  styleUrls: ['./amount-documents.component.scss']
})
export class AmountDocumentsComponent
  extends ConfigurableComponent<AmountComponentConfig>
  implements OnInit {
  public amount: number;
  public text: number;

  /*
    "endpoint": {
        "url": "https://foo-bar.fake/api/v1/docs",
        "method": "GET",
        "responseProp": "result"
      }
  */

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {}

  onSetConfig(config) {
    const { amount, text } = config;
    this.amount = amount;
    this.text = text;

    if (config.endpoint) {
      this.loadData(config.endpoint);
    }
  }

  private async loadData(config: EndpointConfig) {
    const { url, resultProp } = config;
    if (!url) {
      throw new Error(
        'Mandatory config property missing: No url provided in config for endpoint.'
      );
    }

    this.amount = await this.http
      .get(url)
      .toPromise()
      .then(result => (resultProp ? get(result, resultProp) : result))
      .catch(err => '-');
  }
}
