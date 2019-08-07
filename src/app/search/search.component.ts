import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private service: SearchService) { }

  ngOnInit() {
  }

}
