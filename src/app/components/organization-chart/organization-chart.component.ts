import { Component } from '@angular/core';
import { ConfigurableComponent } from 'src/app/core/components/configurable/ConfigurableComponent';
import { OrgConfig } from 'src/app/core/model/OrgConfig';

@Component({
  selector: 'dai-organization-chart',
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
