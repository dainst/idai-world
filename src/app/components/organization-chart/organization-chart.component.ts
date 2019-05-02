import { Component } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';
import { OrgConfig } from 'src/app/core/model/OrgConfig';

@Component({
  selector:
    'dai-organization-chart .section__hierarchy .section__textbox .section-open-access .decoration-bg-lighter-gray .pt-0',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationChartComponent extends ConfigurableComponent<
  OrgConfig
> {
  constructor() {
    super();
  }
}
