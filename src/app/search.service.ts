import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';

// export enum Resource {
//   Films = 'films',
//   People = 'people',
//   Planets = 'planets',
//   Species = 'species',
//   Starships = 'starships',
//   Vehicles = 'vehicles'
// }

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly STAR_WARS_URL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {
  }

  // getSearch(options: { resources: Resource.Films, search: string }): Observable<SwapiAnswer<Films>>;
  // getSearch(options: { resources: Resource.People, search: string }): Observable<SwapiAnswer<People>>;
  // getSearch(options: { resources: Resource.Planets, search: string }): Observable<SwapiAnswer<Planets>>;
  // getSearch(options: { resources: Resource.Species, search: string }): Observable<SwapiAnswer<Species>>;
  // getSearch(options: { resources: Resource.Starships, search: string }): Observable<SwapiAnswer<Starships>>;
  // getSearch(options: { resources: Resource.Vehicles, search: string }): Observable<SwapiAnswer<Vehicles>>;
  getSearch(resources, searchQuery) {
    if (resources && searchQuery) {
      return this.http.get<SwapiAnswer>(`${this.STAR_WARS_URL}${resources}/`,
        {params: {search: searchQuery}});
    }
  }

  // getSearchFromUrl(url) {
  //   return this.http.get<SwapiAnswer>(url);
  // }
}
