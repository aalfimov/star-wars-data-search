import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';
import {NameOrTitleData} from './Interfaces/universal-data';
import {forkJoin, throwError} from 'rxjs';
import {catchError, finalize, pluck} from "rxjs/operators";

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
                {params: {search: searchQuery}})
              .pipe(
                catchError( err => throwError(`An Error Occured ${err}`) )
              );
        }
    }

    getSearchFromUrl(url: string) {
        return this.http.get<NameOrTitleData>(url);
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
