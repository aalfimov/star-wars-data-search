import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {UniversalData} from '../Interfaces/universal-data';

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
  } as UniversalData;

  constructor(private service: SearchService) {
  }

  ngOnInit() {
    this.searchFromUrl();
  }

  searchFromUrl() {
    this.service.getSearchFromUrl(this.url).subscribe(results => {
      if (results) {
        this.dataResults = results;
      }
    });
  }
}
