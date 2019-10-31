import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK } from './mock';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  constructor() { }

  getComics(): Observable<any> {
    return of(MOCK);
  }
}


