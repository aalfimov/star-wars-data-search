import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {SearchService} from '../search.service';
import {ResultsData} from "../Interfaces/results-data";

@Injectable({
    providedIn: 'root'
})
export class SearchResultResolver implements Resolve<Observable<ResultsData>> {

    constructor(private searchService: SearchService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<ResultsData> {
        const searchQuery = route.queryParamMap.get('search');
        if (searchQuery) {
            return this.searchService.getSearchWithoutResources(searchQuery);
        }
        return;
    }
}
