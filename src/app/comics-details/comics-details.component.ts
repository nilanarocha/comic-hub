import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ComicService,
  Comic,
  ComicsCharacter
} from '../shared/services/comic-service.service';
import { MatDialog } from '@angular/material/dialog';
import {
  CharactersDialogComponent,
  DialogData
} from './characters-dialog/characters-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  comic: Comic;

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // Reading id coming from the route and converting into a number.
    const id = +this.route.snapshot.paramMap.get('id');

    this.subscription = this.comicService
      .getComicDetailsById(id)
      .subscribe((comic: Comic) => (this.comic = comic));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    // Default values for characters modal.
    const character: DialogData = {
      name: '',
      image: '',
      description: ''
    };
    // Open the dialog to add a character.
    const dialogRef = this.dialog.open(CharactersDialogComponent, {
      width: '60%',
      data: character
    });

    dialogRef.afterClosed().subscribe(result => {
      // Angular Material Dialog returns "result" as "undefined"
      // If user clicks in cancel button.
      // So I am adding a new character only if result exist
      if (result && result.image && result.name && result.description) {
        this.comic.characters.push(result);
        this.snackBar.open('Character added with success', 'OK', {
          duration: 6000
        });
      } else {
        this.snackBar.open(
          'Character can not be added without name, image, and description',
          'OK',
          {
            duration: 6000
          }
        );
      }
    });
  }

  removeCharacter(character: ComicsCharacter) {
    // Checking if user really wants to remove character from comic.
    if (window.confirm('This operation is not reversible. Are you sure?')) {
      // Checking if the received character is
      // inside the current comic list. If it exists, returns
      // the index for this character in the array,
      // so we can remove it later
      const index = this.comic.characters.indexOf(character);
      if (index !== -1) {
        // Removing the character in the array of characters
        // inside comic
        this.comic.characters.splice(index, 1);
        this.snackBar.open('Character removed with success', 'OK', {
          duration: 6000
        });
      } else {
        // If for some reason we can't find the index for this
        // specific character, we display the error message
        // for the user
        this.snackBar.open(
          'Error trying to remove character. Please try again later',
          'OK',
          {
            duration: 6000
          }
        );
      }
    }
  }

  isCharacterPopular(character: ComicsCharacter) {
    // CHecking if the character has more than the  minimum to be a popular.
    const minimumOfRolesToBePopular = 2000;
    return +character.numberOfRoles > minimumOfRolesToBePopular;
  }
}
