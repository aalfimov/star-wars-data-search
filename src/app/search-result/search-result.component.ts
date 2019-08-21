import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../Interfaces/films';
import {People} from '../Interfaces/people';
import {Planets} from '../Interfaces/planets';
import {Species} from '../Interfaces/species';
import {Starships} from '../Interfaces/starships';
import {Vehicles} from '../Interfaces/vehicles';
import {SearchService} from '../search.service';
import {SwapiCountAnswer} from '../Interfaces/swapi-count-answer';
import {ResultsData} from "../Interfaces/results-data";

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
  private resultsData: ResultsData;

  constructor(private route: ActivatedRoute,
              private service: SearchService,
              private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 10);
  }

  ngOnInit() {
    this.routeDataSubscription();
    // this.service.getSearchWithoutResourcesDict('hope')
    //   .subscribe(res => {
    //     console.log(res);
    //     this.resultsData = res;
    //   });
  }

  private routeDataSubscription() {
    this.route.data.subscribe(results => {
      this.resultsData = results.resultsList;
      const countTheResultsFromSwapi = this.resultsData.films.count
        + this.resultsData.people.count
        + this.resultsData.planets.count
        + this.resultsData.species.count
        + this.resultsData.starships.count
        + this.resultsData.vehicles.count;
      this.countResults = countTheResultsFromSwapi;
      // if (results.resultsList) {
      //   this.countResults = this.sumDataCounter(results.resultsList);
      //   if (this.countResults > 0) {
      //     this.filmsResults = results.resultsList[0].results;
      //     this.peopleResults = results.resultsList[1].results;
      //     this.planetsResults = results.resultsList[2].results;
      //     this.speciesResults = results.resultsList[3].results;
      //     this.starshipsResults = results.resultsList[4].results;
      //     this.vehiclesResults = results.resultsList[5].results;
      //   }
      // }
    });
  }

  /**
   * count the results from swapi
   * @param results - if 0 == no found result
   */
  private sumDataCounter(results: SwapiCountAnswer[]) {
    let count = 0;
    results.forEach((obj => count += obj.count));
    return count;
  }

  checkLoadSpinner() {
    return this.service.getIsLoading();
  }
}
