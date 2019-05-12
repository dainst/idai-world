import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';
import { DaiAppConfig } from './core/config/DaiAppConfig';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private config: DaiAppConfig) {
    router.config.unshift(...config.routes);
  }
}
