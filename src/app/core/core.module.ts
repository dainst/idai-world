import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { ComponentSlotDirective } from './component-slot.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavigationComponent } from './navigation/navigation.component';

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
