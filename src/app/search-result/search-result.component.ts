import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../search.service';
import {FilmsResults} from "../Interfaces/films";
import {PeopleResults} from "../Interfaces/people";
import {PlanetsResults} from "../Interfaces/planets";
import {SpeciesResults} from "../Interfaces/species";
import {StarshipsResults} from "../Interfaces/starships";
import {VehiclesResults} from "../Interfaces/vehicles";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {

  countResults: number = null;
  resultsData: boolean;

  filmsResult: FilmsResults;
  peopleResult: PeopleResults;
  planetsResult: PlanetsResults;
  speciesResult: SpeciesResults;
  starshipsResult: StarshipsResults;
  vesiclesResult: VehiclesResults;

  constructor(private route: ActivatedRoute,
              private service: SearchService,
              private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 100);
  }

  ngOnInit() {
    this.routeDataSubscription();
  }

  private routeDataSubscription() {
    this.route.data.subscribe(results => {
      if (results.resultsList) {
        this.filmsResult = results.resultsList.films;
        this.peopleResult = results.resultsList.people;
        this.planetsResult = results.resultsList.planets;
        this.speciesResult = results.resultsList.species;
        this.starshipsResult = results.resultsList.starships;
        this.vesiclesResult = results.resultsList.vehicles;
        this.resultsData = true;
        this.countResults = this.filmsResult.count
            + this.peopleResult.count
            + this.planetsResult.count
            + this.speciesResult.count
            + this.starshipsResult.count
            + this.vesiclesResult.count;
      }
    });
  }

  checkLoadSpinner() {
    return this.service.getIsLoading();
  }
}
