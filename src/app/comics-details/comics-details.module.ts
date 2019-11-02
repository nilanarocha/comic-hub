import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsDetailsComponent } from './comics-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [ComicsDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComicsDetailsComponent
      }
    ])
  ]
})
export class ComicsDetailsModule { }
