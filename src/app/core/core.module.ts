import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxdModule } from '@ngxd/core';

import { PageComponent } from './components/page/page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LinkComponent } from './components/link/link.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import { ArachneSearchbarComponent } from './components/arachne-searchbar/arachne-searchbar.component';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { TitleBannerComponent } from './components/title-banner/title-banner.component';
import { HtmlComponent } from './components/html/html.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';

@NgModule({
  declarations: [
    PageComponent,
    FooterComponent,
    HeaderComponent,
    NavmenuComponent,
    NavigationComponent,
    LinkComponent,
    HierarchyComponent,
    ArachneSearchbarComponent,
    SubNavigationComponent,
    TitleBannerComponent,
    HtmlComponent,
    SpinnerComponent,
    FooterMenuComponent
  ],
  exports: [
    PageComponent,
    FooterComponent,
    HeaderComponent,
    LinkComponent,
    HierarchyComponent,
    ArachneSearchbarComponent,
    SubNavigationComponent,
    TitleBannerComponent,
    HtmlComponent,
    SpinnerComponent,
    FooterMenuComponent
  ],
  entryComponents: [
    PageComponent,
    LinkComponent,
    HierarchyComponent,
    ArachneSearchbarComponent,
    SubNavigationComponent,
    TitleBannerComponent,
    HtmlComponent
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, NgxdModule]
})
export class CoreModule {}
