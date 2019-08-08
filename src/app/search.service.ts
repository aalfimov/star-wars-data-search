import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {People} from "./Interfaces/people";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SWAPI_Answer} from "./Interfaces/swapi-answer";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly STAR_WARS_URL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {
  }

  getSearch(arg): Observable<SWAPI_Answer> {
    return this.http.get<SWAPI_Answer>(`${this.STAR_WARS_URL}${arg.resources}/?search=${arg.search}`)
  }

  // https://swapi.co/api/starships/64/?format=wookiee
  // `${this.STAR_WARS_URL}people/?search=${arg}`
  // /api/people/?search=r2
}
