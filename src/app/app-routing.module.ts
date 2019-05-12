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
    const routes = [...config.routes];
    // const defaultRouteComponent = config.routes.find(
    //   route => (route as any).default
    // );
    // if (defaultRouteComponent) {
    //   routes.push({
    //     path: '**',
    //     component: defaultRouteComponent as Type<any>
    //   });
    // }

    router.config.unshift(...routes);
  }
}
