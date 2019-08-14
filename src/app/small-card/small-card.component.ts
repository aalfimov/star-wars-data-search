import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {UniversalData} from "../Interfaces/universal-data";

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {
  @Input() private url: string;
  private dataResults: UniversalData;
  constructor(private service: SearchService) { }

  ngOnInit() {
    this.searchFromUrl()
  }
  searchFromUrl(){
    this.service.getSearchFromUrl(this.url).subscribe(results =>{
      this.dataResults = results.results[0];
      console.log(results);
    });
  }
}
