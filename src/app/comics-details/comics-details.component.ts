import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComicService, Comic, ComicsCharacter } from '../shared/services/comic-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CharactersDialogComponent, DialogData } from './characters-dialog/characters-dialog.component';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  comic: Comic;

  constructor(private route: ActivatedRoute, private comicService: ComicService, public dialog: MatDialog) { }

  ngOnInit() {
    // Reading id coming from the route and converting into a number.
    const id = +this.route.snapshot.paramMap.get('id');

    this.subscription = this.comicService.getComicDetailsById(id)
      .subscribe((comic: Comic) => this.comic = comic);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    // Default values for characters modal. 
    const character: DialogData = {
      name: '',
      image: '',
      description: '',
    };
    // Open the dialog to add a character.
    const dialogRef = this.dialog.open(CharactersDialogComponent, {
      width: '60%',
      data: character,
    });

    dialogRef.afterClosed().subscribe(result => {
      // Angular Material Dialog returns "result" as "undefined"
      // If user clicks in cancel button. 
      // So I am adding a new character only if result exist 
      if (result) {
        this.comic.characters.push(result);
      }
    });
  }

  removeCharacter(id: number, characterId: number) {
    // Checking if user really wants to remove character from comic. 
    if (window.confirm('This operation is not reversible. Are you sure?')) {
      this.comic.characters = this.comic.characters.filter(character => character.id !== characterId);
    }
  }

  isCharacterPopular(character: ComicsCharacter) {
    // CHecking if the character has more than the  minimum to be a popular.
    const minimumOfRolesToBePopular = 2000;
    return +character.numberOfRoles > minimumOfRolesToBePopular;
  }
}


