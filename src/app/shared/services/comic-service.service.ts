import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK } from './mock';
import { HttpClient } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
export type ComicsCharacter = {
  id: number | string;
  numberOfRoles: number | string;
  isGood: boolean | string;
  image?: string;
  name: string;
  description: string;
};

export type Comic = {
  id: number | string;
  name: string;
  description: string;
  image?: string;
  characters: ComicsCharacter[];
};

const API_URL = 'https://propertymecomics.s3.amazonaws.com/comics';

@Injectable({
  providedIn: 'root'
})

export class ComicServiceService {

  private comics: Comic[] = [];

  constructor(private http: HttpClient) { }

  getComics(): Observable<Comic[]> {
    if (this.comics.length > 0) {
      console.log('Using cached comics response');
      return of(this.comics);
    }
    return this.http.get(API_URL)
      .pipe(
        map((comics: Comic[]) => this.comics = comics),
        tap(_ => console.log('fetched comics')),
        catchError(error => {
          console.error(error);
          return of(MOCK);
        }),
      );
  }

  getComicDetailsById(id: number): Observable<Comic | Object> {
    return this.getComics().pipe(
      map((comics: Comic[]) => comics.find(c => +c.id === id)),
      tap(_ => console.log(`fetched comic details ${id}`)),
      catchError(error => {
        console.error(error);
        return of({});
      }),
    )
  }

}