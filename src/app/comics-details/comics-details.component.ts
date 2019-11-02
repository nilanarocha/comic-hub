import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComicServiceService, Comic } from '../shared/services/comic-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CharactersDialogComponent, DialogData } from './characters-dialog/characters-dialog.component';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {

  private subscription: Subscription;
  comic: Comic;
  character: DialogData = {
    name: '',
    image: '',
    description: '',
  };

  constructor(private route: ActivatedRoute, private comicService: ComicServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    // Reading id from route
    const id = +this.route.snapshot.paramMap.get('id');

    this.subscription = this.comicService.getComicDetailsById(id)
      .subscribe((comic: Comic) => this.comic = comic);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CharactersDialogComponent, {
      width: '60%',
      data: this.character
    });

    dialogRef.afterClosed().subscribe(result => {
      this.comic.characters.push(result);

    });
  }

  removeCharacter(id: number, characterId: number) {
    console.log(id, characterId);
    this.comic.characters = this.comic.characters.filter(character => character.id !== characterId);
  }

}


