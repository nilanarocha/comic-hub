import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'comics-details/:id',
    loadChildren: () => import('./comics-details/comics-details.module').then(mod => mod.ComicsDetailsModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule)
  },
  {
    path: '**',
    redirectTo: '/homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
