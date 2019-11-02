import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK } from './mock';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


const API_URL = 'https://propertymecomics.s3.amazonaws.com/comics';

@Injectable({
  providedIn: 'root'
})

export class ComicServiceService {

  constructor(private http: HttpClient) { }

  getComics(): Observable<any> {
    // In case of the API is down, please uncomment the line below.
    // return of(MOCK);
    return this.http.get(API_URL);
  }

}



