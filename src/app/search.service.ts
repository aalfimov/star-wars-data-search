import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';
import {forkJoin, zip} from 'rxjs';
import {NameOrTitleData} from './Interfaces/name-or-title-data';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly STAR_WARS_URL = 'https://swapi.co/api/';
  private isLoadingCounter = 0;

  constructor(private http: HttpClient) {
  }

  getSearch(resources: string, searchQuery: string) {
    if (resources && searchQuery) {
      return this.http.get<SwapiAnswer>(`${this.STAR_WARS_URL}${resources}/`,
        {params: {search: searchQuery}});
    }
  }

  getSearchFromUrl(url: string) {
    return this.http.get<NameOrTitleData>(url);
  }

  getSearchWithoutResourcesDict(searchQuery: string) {
    return forkJoin({
      films: this.getSearch('films', searchQuery),
      people: this.getSearch('people', searchQuery),
      planets: this.getSearch('planets', searchQuery),
      species: this.getSearch('species', searchQuery),
      starships: this.getSearch('starships', searchQuery),
      vehicles: this.getSearch('vehicles', searchQuery)
    })
  }

  incrementIsLoadingCounter() {
    this.isLoadingCounter++;
  }

  decrementIsLoadingCounter() {
    this.isLoadingCounter--;
  }

  getIsLoading() {
    return this.isLoadingCounter > 0;
  }
}

