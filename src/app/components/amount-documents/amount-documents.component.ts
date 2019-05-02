import { Component } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';

@Component({
  selector: 'dai-amount-docs .section__amount-docs .decoration-bg-lighter-gray',
  templateUrl: './amount-documents.component.html',
  styleUrls: ['./amount-documents.component.scss']
})
export class AmountDocumentsComponent extends ConfigurableComponent {
  public amount: number;
  public text: number;

  onSetConfig(config) {
    const { amount, text } = config;
    this.amount = amount;
    this.text = text;
  }
}
