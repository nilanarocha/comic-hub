import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COMICS_MOCK } from './mock';
import { HttpClient } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';

// Typing for character objects.
export type ComicsCharacter = {
  id: number | string;
  numberOfRoles: number | string;
  isGood: boolean | string;
  image?: string;
  name: string;
  description: string;
};

// Typing for comic objects.
export type Comic = {
  id: number | string;
  name: string;
  description: string;
  image?: string;
  characters: ComicsCharacter[];
};

// Default API URL. 
const API_URL = 'https://propertymecomics.s3.amazonaws.com/comics';

@Injectable({
  providedIn: 'root'
})

export class ComicServiceService {

  private comics: Comic[] = [];

  constructor(private http: HttpClient) { }

  getComics(): Observable<Comic[]> {
    // If the comics API was called already the App will reuse the cached data 
    // and returning to the user. 
    // This value will be updated when the user refresh the page. 
    if (this.comics.length > 0) {
      console.log('[ComicService]: Using cached comics response');
      return of(this.comics);
    }

    return this.http.get(API_URL)
      .pipe(
        map((comics: Comic[]) => this.comics = comics),
        tap(_ => console.log('[ComicService]: Fetching comics from API')),
        catchError(error => {
          console.error('[ComicService]: ERROR:', error);
          return of(COMICS_MOCK);
        }),
      );
  }

  getComicDetailsById(id: number): Observable<Comic | Object> {
    // Getting list of comics using cache-first approach 
    // and returning the specific comic.
    return this.getComics().pipe(
      map((comics: Comic[]) => comics.find(c => +c.id === id)),
      tap(_ => console.log(`[ComicService]: Fetching comic details for id '${id}'`)),
      catchError(error => {
        console.error('[ComicService]: ERROR:', error);
        return of({});
      }),
    )
  }

}