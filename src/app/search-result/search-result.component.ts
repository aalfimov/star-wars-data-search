import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../Interfaces/films';
import {People} from '../Interfaces/people';
import {Planets} from '../Interfaces/planets';
import {Species} from '../Interfaces/species';
import {Starships} from '../Interfaces/starships';
import {Vehicles} from '../Interfaces/vehicles';
import {SwapiAnswer} from "../Interfaces/swapi-answer";
import {SearchService} from "../search.service";

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
  isLoading = false;

  constructor(private route: ActivatedRoute,
              private service: SearchService) {
  }

  ngOnInit() {
    this.routeDataSubscription();
  }

  private routeDataSubscription() {
    this.isLoading = true;
    this.route.data.subscribe(results => {
        if (results.resultsList) {
          this.countResults = this.sumDataCounter(results.resultsList);
          if (this.countResults > 0) {
            this.filmsResults = results.resultsList[0].results;
            this.peopleResults = results.resultsList[1].results;
            this.planetsResults = results.resultsList[2].results;
            this.speciesResults = results.resultsList[3].results;
            this.starshipsResults = results.resultsList[4].results;
            this.vehiclesResults = results.resultsList[5].results;
          }
          // this.isLoading = !results.resultsList[6].finished;
        }
      }, error => {
        console.log('Error!' + error)
      },
      () => {
        console.log('done in component');
      });
  }

  private sumDataCounter(results: SwapiAnswer[]) {
    let count = 0;
    results.forEach((obj => count += obj.count));
    return count;
  }
}
