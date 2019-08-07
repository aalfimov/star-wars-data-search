import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly STAR_WARS_URL = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }

  getSearch(arg) {
    return this.http.jsonp(`${this.STAR_WARS_URL}people/?search=${arg}`, 'callback');
  }
  // https://swapi.co/api/starships/64/?format=wookiee
  // ${this.STAR_WARS_URL}?q=${arg}&output=jsonp
}
