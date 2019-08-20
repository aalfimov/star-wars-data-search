import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FinishData, SwapiAnswer} from './Interfaces/swapi-answer';
import {NameOrTitleData} from './Interfaces/universal-data';
import {forkJoin, of, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly STAR_WARS_URL = 'https://swapi.co/api/';
  private isLoading = 0;

  constructor(private http: HttpClient) {
  }

  getIsLoadingCounter() {
    return this.isLoading > 0;
  }

  getSearch(resources: string, searchQuery: string) {
    if (resources && searchQuery) {
      return this.http.get<SwapiAnswer>(`${this.STAR_WARS_URL}${resources}/`,
        {params: {search: searchQuery}})
        .pipe(
          catchError(err => throwError(`An Error Occurred ${err}`))
        );
    }
  }

  getSearchFromUrl(url: string) {
    this.isLoading++;
    return this.http.get<NameOrTitleData>(url).pipe(finalize(() => {
      this.isLoading--;
      console.log('finalize' + this.isLoading);
    }));
  }

  getSearchWithoutResources(searchQuery: string) {
    this.isLoading++;
    return forkJoin(
      this.getSearch('films', searchQuery),
      this.getSearch('people', searchQuery),
      this.getSearch('planets', searchQuery),
      this.getSearch('species', searchQuery),
      this.getSearch('starships', searchQuery),
      this.getSearch('vehicles', searchQuery),
      of({
        count: 0,
        finished: true
      } as FinishData)).pipe(finalize(() => {
      this.isLoading--;
      console.log('finalize' + this.isLoading);
    }));
  }
}
