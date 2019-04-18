import { TestBed } from '@angular/core/testing';

import { ComponentResolver } from './component-resolver.service';
import { SubNavigationComponent } from '../components/sub-navigation/sub-navigation.component';
import { IntroTextComponent } from '../../components/intro-text/intro-text.component';
import { SliderTilesComponent } from '../../components/slider-tiles/slider-tiles.component';
import { SliderCirclesComponent } from '../../components/slider-circles/slider-circles.component';
import { OrganizationChartComponent } from '../../components/organization-chart/organization-chart.component';
import { SliderImageComponent } from '../../components/slider-image/slider-image.component';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

describe('ComponentResolverService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ComponentResolver,
          useValue: new ComponentResolver({
            sub_nav: SubNavigationComponent,
            intro_text: IntroTextComponent,
            slider_tiles: SliderTilesComponent,
            slider_circles: SliderCirclesComponent,
            org_chart: OrganizationChartComponent,
            slider_image: SliderImageComponent,
            info_box: InfoBoxComponent,
            search_box: SearchBoxComponent
          })
        }
      ]
    })
  );

  it('should be created', () => {
    const service: ComponentResolver = TestBed.get(ComponentResolver);
    expect(service).toBeTruthy();
  });
});
