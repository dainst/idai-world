import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxdModule } from '@ngxd/core';

import { ComponentSlotDirective } from './directives/component-slot.directive';
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

@NgModule({
  declarations: [
    PageComponent,
    ComponentSlotDirective,
    FooterComponent,
    HeaderComponent,
    NavmenuComponent,
    NavigationComponent,
    LinkComponent,
    HierarchyComponent,
    ArachneSearchbarComponent,
    SubNavigationComponent,
    TitleBannerComponent
  ],
  exports: [
    PageComponent,
    FooterComponent,
    HeaderComponent,
    LinkComponent,
    HierarchyComponent,
    ArachneSearchbarComponent,
    SubNavigationComponent,
    TitleBannerComponent
  ],
  entryComponents: [
    PageComponent,
    LinkComponent,
    HierarchyComponent,
    ArachneSearchbarComponent,
    SubNavigationComponent,
    TitleBannerComponent
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, NgxdModule]
})
export class CoreModule {}
