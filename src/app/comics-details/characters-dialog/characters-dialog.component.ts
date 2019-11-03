import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  image: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-characters-dialog',
  templateUrl: './characters-dialog.component.html',
  styleUrls: ['./characters-dialog.component.css']
})
export class CharactersDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CharactersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onCancelClick(): void {
    // Closes the modal when user clicks on cancel button. 
    this.dialogRef.close();
  }
}
