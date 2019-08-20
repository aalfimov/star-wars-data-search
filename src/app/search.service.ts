import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';
import {NameOrTitleData} from './Interfaces/universal-data';
import {forkJoin} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly STAR_WARS_URL = 'https://swapi.co/api/';
  private isLoadingCounter = 0;

  constructor(private http: HttpClient) {
  }

  getIsLoading() {
    return this.isLoadingCounter > 0;
  }

  getSearch(resources: string, searchQuery: string) {
    if (resources && searchQuery) {
      return this.http.get<SwapiAnswer>(`${this.STAR_WARS_URL}${resources}/`,
        {params: {search: searchQuery}});
    }
  }

  getSearchFromUrl(url: string) {
    this.isLoadingCounter++;
    return this.http.get<NameOrTitleData>(url).pipe(finalize(() => {
      this.isLoadingCounter--;
    }));
  }

  getSearchWithoutResources(searchQuery: string) {
    return forkJoin(
      this.getSearch('films', searchQuery),
      this.getSearch('people', searchQuery),
      this.getSearch('planets', searchQuery),
      this.getSearch('species', searchQuery),
      this.getSearch('starships', searchQuery),
      this.getSearch('vehicles', searchQuery));
  }
}
