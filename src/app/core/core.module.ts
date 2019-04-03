import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ComponentSlotDirective } from './directives/component-slot.directive';
import { PageComponent } from './components/page/page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    PageComponent,
    ComponentSlotDirective,
    FooterComponent,
    HeaderComponent,
    NavmenuComponent,
    NavigationComponent
  ],
  exports: [PageComponent, FooterComponent, HeaderComponent],
  entryComponents: [PageComponent],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class CoreModule {}
