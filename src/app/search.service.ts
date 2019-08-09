import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';
import {Observable} from 'rxjs';
import {Films} from './Interfaces/films';
import {People} from './Interfaces/people';
import {Planets} from './Interfaces/planets';
import {Species} from './Interfaces/species';
import {Starships} from './Interfaces/starships';
import {Vehicles} from './Interfaces/vehicles';

export enum Resource {
  Films = 'films',
  People = 'people',
  Planets = 'planets',
  Species = 'species',
  Starships = 'starships',
  Vehicles = 'vehicles'
}

export interface SearchOptions {
  resources: string;
  search: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly STAR_WARS_URL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {
  }

  getSearch(options: { resources: Resource.Films, search: string }): Observable<SwapiAnswer<Films>>;
  getSearch(options: { resources: Resource.People, search: string }): Observable<SwapiAnswer<People>>;
  getSearch(options: { resources: Resource.Planets, search: string }): Observable<SwapiAnswer<Planets>>;
  getSearch(options: { resources: Resource.Species, search: string }): Observable<SwapiAnswer<Species>>;
  getSearch(options: { resources: Resource.Starships, search: string }): Observable<SwapiAnswer<Starships>>;
  getSearch(options: { resources: Resource.Vehicles, search: string }): Observable<SwapiAnswer<Vehicles>>;
  getSearch<T>(options: SearchOptions) {
    return this.http.get<SwapiAnswer<T>>(`${this.STAR_WARS_URL}${options.resources}/`, {params: {search: options.search}});
  }

  // getFilms(search: string) {
  //   return this.getSearch({ resources: Resource.Films, search });
  // }

  getSearchURL<T>(url: string) {
    return this.http.get<SwapiAnswer<T>>(url);
  }
}
