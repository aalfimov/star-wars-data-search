import {Component, Input, OnInit} from '@angular/core';
import {People} from "../Interfaces/people";
import {Films} from "../Interfaces/films";
import {Planets} from "../Interfaces/planets";
import {Species} from "../Interfaces/species";
import {Starships} from "../Interfaces/starships";
import {Vehicles} from "../Interfaces/vehicles";
import {AppComponent} from "../app.component";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  private countResults: number;
  @Input() value;
  private dataResults: People | Films | Planets | Species | Starships | Vehicles;

  constructor(private service: SearchService,
              private appcomp: AppComponent) {
  }

  ngOnInit() {
  }
  search() {
    this.appcomp.getSearch(this.value.resources, this.value.searchQuery);
    this.service.getSearch(this.value.resources, this.value.searchQuery)
      .subscribe(results => {
        this.countResults = results.count;
        this.dataResults = results.results[0];
      });
  }
}
