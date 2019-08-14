import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';
import {UniversalData} from './Interfaces/universal-data';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly STAR_WARS_URL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {
  }

  getSearch(resources, searchQuery) {
    if (resources && searchQuery) {
      return this.http.get<SwapiAnswer>(`${this.STAR_WARS_URL}${resources}/`,
        {params: {search: searchQuery}});
    }
  }
  getSearchFromUrl(url) {
    return this.http.get<UniversalData>(url);
  }
}
