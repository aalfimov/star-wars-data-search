import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {AppComponent} from '../app.component';
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
              private appComp: AppComponent) {
  }

  ngOnInit() {
    this.searchFromUrl();
  }

  searchFromUrl() {
    this.service.incrementIsLoadingCounter();
    this.service.getSearchFromUrl(this.url)
      .subscribe(results => {
        if (results) {
          this.dataResults = results;
        }
      }, error => console.log(error),
        () => this.service.decrementIsLoadingCounter());
  }

  private search(searchParams: string) {
    this.appComp.getSearch(searchParams);
  }
}
