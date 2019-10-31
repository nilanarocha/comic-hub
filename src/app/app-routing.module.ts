import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'homepage',
  loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule)

}, {
  path: '**',
  redirectTo: '/homepage'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
