import { Component, OnInit } from '@angular/core';
import { ComicService, Comic } from '../shared/services/comic-service.service';
import { SlugifyPipe } from '../shared/pipes/slugify.pipe';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  comics: Comic[] = [];
  constructor(private comicService: ComicService, private slugifyPipe: SlugifyPipe) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(): void {
    // Getting list of comics to be rendered in the page. 
    this.comicService.getComics()
      .subscribe(comics => this.comics = comics);
  }

  slugify(text: string) {
    // Transforming text to URL friendly format. 
    return this.slugifyPipe.transform(text);
  }

}
