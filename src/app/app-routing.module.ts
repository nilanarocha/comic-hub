import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// List with all routes for the App.
// All the pages are loaded using async imports, which decreases
// the main bundle for the App. Also, it will be loaded only
// if required (user navigates from one page to another).
const routes: Routes = [
  {
    path: 'comics/details/:id/:name',
    loadChildren: () =>
      import('./comics-details/comics-details.module').then(
        mod => mod.ComicsDetailsModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then(mod => mod.HomepageModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  // If there is no match to any other route, user will
  // be redirected to error page.
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
