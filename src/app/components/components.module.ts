import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroTextComponent } from './intro-text/intro-text.component';
import { SliderTilesComponent } from './slider-tiles/slider-tiles.component';
import { SliderCirclesComponent } from './slider-circles/slider-circles.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    IntroTextComponent,
    SliderTilesComponent,
    SliderCirclesComponent,
    OrganizationChartComponent,
    SliderImageComponent,
    InfoBoxComponent,
    SearchBoxComponent,
    SubNavigationComponent
  ],
  entryComponents: [
    IntroTextComponent,
    SliderTilesComponent,
    SliderCirclesComponent,
    OrganizationChartComponent,
    SliderImageComponent,
    InfoBoxComponent,
    SearchBoxComponent,
    SubNavigationComponent
  ]
})
export class ComponentsModule {}
