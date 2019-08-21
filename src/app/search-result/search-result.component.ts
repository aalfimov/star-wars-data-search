import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../search.service';
import {ResultsData} from '../Interfaces/results-data';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {

  private countResults: number = null;
  private resultsData: ResultsData;

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
        this.resultsData = results.resultsList;
        this.countResults = this.resultsData.films.count
            + this.resultsData.people.count
            + this.resultsData.planets.count
            + this.resultsData.species.count
            + this.resultsData.starships.count
            + this.resultsData.vehicles.count;
      }
    });
  }

  checkLoadSpinner() {
    return this.service.getIsLoading();
  }
}
