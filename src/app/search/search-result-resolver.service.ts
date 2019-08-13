import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {SearchService} from '../search.service';
import {SwapiAnswer} from '../Interfaces/swapi-answer';

@Injectable({
    providedIn: 'root'
})
export class SearchResultResolver implements Resolve<Observable<SwapiAnswer>> {

    constructor(private searchService: SearchService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<SwapiAnswer> {
        // const searchQuery = route.queryParamMap.get('searchQuery');
        //     // const resources = route.queryParamMap.get('resources');
        //     // return this.searchService.getSearch(resources, searchQuery);
        return;
    }
}
