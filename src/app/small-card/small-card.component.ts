import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {AppComponent} from '../app.component';
import {finalize} from 'rxjs/operators';
import {NameOrTitleData} from '../Interfaces/name-or-title-data';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {
  @Input() private url: string;
  @Input() private resources: string;
  private dataResults = {
    name: '',
    title: ''
  } as NameOrTitleData;

  constructor(private service: SearchService,
              private appcomp: AppComponent) {
  }

  ngOnInit() {
    this.searchFromUrl();
  }

  searchFromUrl() {
    this.service.incrementIsLoadingCounter();
    this.service.getSearchFromUrl(this.url)
      .pipe(
        finalize(() => this.service.decrementIsLoadingCounter()))
      .subscribe(results => {
      if (results) {
        this.dataResults = results;
      }
    });
  }

  private search(searchParams: string) {
    this.appcomp.getSearch(searchParams);
  }
}
