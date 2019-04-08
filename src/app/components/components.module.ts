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
import { RouterModule } from '@angular/router';
import { ImageLinkTileComponent } from './slider-tiles/image-link-tile/image-link-tile.component';
import { TextTileComponent } from './slider-tiles/text-tile/text-tile.component';
import { LinkListTileComponent } from './slider-tiles/link-list-tile/link-list-tile.component';
import { NgxdModule } from '@ngxd/core';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, RouterModule, NgxdModule, CoreModule],
  declarations: [
    IntroTextComponent,
    SliderTilesComponent,
    SliderCirclesComponent,
    OrganizationChartComponent,
    SliderImageComponent,
    InfoBoxComponent,
    SearchBoxComponent,
    SubNavigationComponent,
    ImageLinkTileComponent,
    TextTileComponent,
    LinkListTileComponent
  ],
  entryComponents: [
    IntroTextComponent,
    SliderTilesComponent,
    LinkListTileComponent,
    TextTileComponent,
    ImageLinkTileComponent,
    SliderCirclesComponent,
    OrganizationChartComponent,
    SliderImageComponent,
    InfoBoxComponent,
    SearchBoxComponent,
    SubNavigationComponent
  ]
})
export class ComponentsModule {}
