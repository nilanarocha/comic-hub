import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// List with all routes for the App.
// All the pages are loaded using async imports, which decreases
// the main bundle for the App. Also, it will be loaded only
// if required (user navigates from one page to another).
const routes: Routes = [
  {
    path: 'comics/details/:id/:name',
    loadChildren: () => import('./comics-details/comics-details.module').then(mod => mod.ComicsDetailsModule)
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule)
  },
  // If there is no match to any other route, user will
  // be redirected to homepage.
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
