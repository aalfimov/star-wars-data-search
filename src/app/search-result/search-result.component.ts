import {Component, OnChanges, OnInit} from '@angular/core';
import {UniversalData} from "../Interfaces/universal-data";
import {ActivatedRoute} from "@angular/router";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  private countResults: number = null;
  private dataResults: UniversalData[];
  private resources: string;

  constructor(private route: ActivatedRoute,
              private searchResources: SearchComponent) {
  }

  ngOnInit() {
    this.resources = this.searchResources.getResources();
    this.countResults = this.searchResources.getCountResults();
    this.dataResults = this.searchResources.getDataResults();
    this.routeDataSubscription();
  }

  // ngOnChanges() {
  //   this.resources = this.searchResources.getResources();
  //   this.countResults = this.searchResources.getCountResults();
  //   this.dataResults = this.searchResources.getDataResults();
  // }
  private routeDataSubscription() {
    this.route.data.subscribe(results => {
      if (results.resultsList) {
        this.countResults = results.resultsList.count;
        this.dataResults = results.resultsList.results;
        this.resources = this.searchResources.getResources();
      }
    });
  }
}
