import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';
import {UniversalData} from './Interfaces/universal-data';
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly STAR_WARS_URL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {
  }

  getSearch(resources: string, searchQuery: string) {
    if (resources && searchQuery) {
      return this.http.get<SwapiAnswer>(`${this.STAR_WARS_URL}${resources}/`,
        {params: {search: searchQuery}});
    }
  }

  getSearchFromUrl(url: string) {
    return this.http.get<UniversalData>(url);
  }

  getSearchWithoutResources(searchQuery: string) {
    return forkJoin(
      this.getSearch('films', searchQuery),
      this.getSearch('people', searchQuery),
      this.getSearch('planets', searchQuery),
      this.getSearch('species', searchQuery),
      this.getSearch('starships', searchQuery),
      this.getSearch('vehicles', searchQuery))
  }
}
