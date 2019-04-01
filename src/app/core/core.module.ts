import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ComponentSlotDirective } from './component-slot.directive';

@NgModule({
  declarations: [PageComponent, NavbarComponent, ComponentSlotDirective],
  exports: [PageComponent, NavbarComponent],
  entryComponents: [PageComponent],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class CoreModule {}
