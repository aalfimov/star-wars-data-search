import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../Interfaces/films';
import {People} from '../Interfaces/people';
import {Planets} from '../Interfaces/planets';
import {Species} from '../Interfaces/species';
import {Starships} from '../Interfaces/starships';
import {Vehicles} from '../Interfaces/vehicles';
import {SwapiAnswer} from "../Interfaces/swapi-answer";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  get vehiclesResults(): Vehicles[] {
    return this._vehiclesResults;
  }

  get starshipsResults(): Starships[] {
    return this._starshipsResults;
  }

  get speciesResults(): Species[] {
    return this._speciesResults;
  }

  get planetsResults(): Planets[] {
    return this._planetsResults;
  }

  get peopleResults(): People[] {
    return this._peopleResults;
  }

  get filmsResults(): Films[] {
    return this._filmsResults;
  }

  private countResults: number = null;
  private _filmsResults: Films[];
  private _peopleResults: People[];
  private _planetsResults: Planets[];
  private _speciesResults: Species[];
  private _starshipsResults: Starships[];
  private _vehiclesResults: Vehicles[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeDataSubscription();
  }

  private routeDataSubscription() {
    this.route.data.subscribe(results => {
      if (results.resultsList) {
        this.countResults = this.checkDataCount(results.resultsList);
        this._filmsResults = results.resultsList[0].results;
        this._peopleResults = results.resultsList[1].results;
        this._planetsResults = results.resultsList[2].results;
        this._speciesResults = results.resultsList[3].results;
        this._starshipsResults = results.resultsList[4].results;
        this._vehiclesResults = results.resultsList[5].results;
      }
    });
  }

  private checkDataCount(results: SwapiAnswer[]) {
    let count = 0;
    results.forEach((obj => count += obj.count));
    return count;
  }
}
