import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../Interfaces/films';
import {People} from '../Interfaces/people';
import {Planets} from '../Interfaces/planets';
import {Species} from '../Interfaces/species';
import {Starships} from '../Interfaces/starships';
import {Vehicles} from '../Interfaces/vehicles';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
    private countResults: number = null;
    private filmsResults: Films[];
    private peopleResults: People[];
    private planetsResults: Planets[];
    private speciesResults: Species[];
    private starshipsResults: Starships[];
    private vehiclesResults: Vehicles[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeDataSubscription();
    }

    private routeDataSubscription() {
        this.route.data.subscribe(results => {
            if (results.resultsList) {
                console.log('count: ' + this.countResults);
                this.filmsResults = results.resultsList[0].results;
                this.peopleResults = results.resultsList[1].results;
                this.planetsResults = results.resultsList[2].results;
                this.speciesResults = results.resultsList[3].results;
                this.starshipsResults = results.resultsList[4].results;
                this.vehiclesResults = results.resultsList[5].results;
            }
        });
    }

    // private checkDataCount(results: any) {
    //   let count = 0;
    //   for (let i = 0; results; i++) {
    //     count = count + results[i].count;
    //   }
    //   return count;
    // }
}
