import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SlugifyPipe } from './pipes/slugify.pipe';
@NgModule({
  declarations: [SlugifyPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule
  ],
  providers: [SlugifyPipe]
})
export class SharedModule { }
