import { Component, OnInit } from '@angular/core';
import { ComicServiceService } from '../shared/services/comic-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  comics: any = [];
  constructor(private comicService: ComicServiceService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(): void {
    this.comicService.getComics()
      .subscribe(comics => this.comics = comics);
  }

}
