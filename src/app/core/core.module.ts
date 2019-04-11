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

@NgModule({
  declarations: [
    PageComponent,
    ComponentSlotDirective,
    FooterComponent,
    HeaderComponent,
    NavmenuComponent,
    NavigationComponent,
    LinkComponent,
    HierarchyComponent
  ],
  exports: [
    PageComponent,
    FooterComponent,
    HeaderComponent,
    LinkComponent,
    HierarchyComponent
  ],
  entryComponents: [PageComponent, LinkComponent, HierarchyComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, NgxdModule]
})
export class CoreModule {}
