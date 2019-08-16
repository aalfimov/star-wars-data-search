import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwapiAnswer} from "../Interfaces/swapi-answer";
import {Films} from "../Interfaces/films";
import {People} from "../Interfaces/people";
import {Planets} from "../Interfaces/planets";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  private countResults: number = null;
  // private dataResults: SwapiAnswer[];
  private filmsResults: Films[];
  private peopleResults: People[];
  private planetsResults: Planets[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeDataSubscription();
  }

  private routeDataSubscription() {
    this.route.data.subscribe(results => {
      if (results.resultsList) {
        // this.dataResults = results.resultsList;
        console.log(results.resultsList);
        this.filmsResults = results.resultsList[0].results;
        this.peopleResults = results.resultsList[1].results;
        this.planetsResults = results.resultsList[2].results;
      }
    });
    console.log(this.filmsResults);
  }
}
