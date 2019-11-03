import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsDetailsComponent } from './comics-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CharactersDialogComponent } from './characters-dialog/characters-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ComicsDetailsComponent, CharactersDialogComponent],
  entryComponents: [CharactersDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatChipsModule,
    MatSnackBarModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComicsDetailsComponent
      }
    ])
  ]
})
export class ComicsDetailsModule {}
