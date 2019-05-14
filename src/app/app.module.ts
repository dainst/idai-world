import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { ComponentResolver } from './core/service/component-resolver.service';
import { IntroTextComponent } from './components/intro-text/intro-text.component';
import { SliderTilesComponent } from './components/slider-tiles/slider-tiles.component';
import { SliderCirclesComponent } from './components/slider-circles/slider-circles.component';
import { OrganizationChartComponent } from './components/organization-chart/organization-chart.component';
import { SliderImageComponent } from './components/slider-image/slider-image.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ComponentsModule } from './components/components.module';
import { SubNavigationComponent } from './core/components/sub-navigation/sub-navigation.component';
import { TitleBannerComponent } from './core/components/title-banner/title-banner.component';
import { AmountDocumentsComponent } from './components/amount-documents/amount-documents.component';
import { HtmlComponent } from './core/components/html/html.component';
import { NewsComponent } from './components/news/news.component';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

// the second parameter 'fr' is optional
registerLocaleData(localeDe, 'de');

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
        search_box: SearchBoxComponent,
        title_banner: TitleBannerComponent,
        amount_docs: AmountDocumentsComponent,
        html: HtmlComponent,
        news: NewsComponent
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
