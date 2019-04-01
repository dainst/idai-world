import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { ComponentResolver } from './core/component-resolver.service';
import { IntroTextComponent } from './components/intro-text/intro-text.component';
import { SliderTilesComponent } from './components/slider-tiles/slider-tiles.component';
import { SliderCirclesComponent } from './components/slider-circles/slider-circles.component';
import { OrganizationChartComponent } from './components/organization-chart/organization-chart.component';
import { SliderImageComponent } from './components/slider-image/slider-image.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ComponentsModule } from './components/components.module';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule, ComponentsModule],
  declarations: [AppComponent, NotFoundComponent],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
