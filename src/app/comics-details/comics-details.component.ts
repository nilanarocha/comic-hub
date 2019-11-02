import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComicServiceService } from '../shared/services/comic-service.service';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {

  private subscription: Subscription;
  comic: Object;

  constructor(private route: ActivatedRoute, private comicService: ComicServiceService) { }

  ngOnInit() {
    // Reading id from route
    const id = +this.route.snapshot.paramMap.get('id');

    this.subscription = this.comicService.getComicDetailsById(id)
      .subscribe(comic => this.comic = comic);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


