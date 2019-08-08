import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SWAPI_Answer} from "../Interfaces/swapi-answer";
import {People} from "../Interfaces/people";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  constructor(private service: SearchService, private fb: FormBuilder) {
    this.initForm()
  }

  private results: SWAPI_Answer;
  private searchForm: FormGroup;
  private resources: string;

  private initForm() {
    this.searchForm = this.fb.group({
      resources: ['', Validators.required],
      search: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  search({valid, value}) {
    if (!valid) {
      console.error('invalid value');
      return;
    }
    this.resources = value.resources;
    this.service.getSearch(value).subscribe(results => this.results = results);
    switch (this.resources) {
      case 'people':
        let res: People[];
        res = this.results.results;
        break;
      case 'films':
        break;
      case 'planets':
        break;
      case 'species':
        break;
      case 'starships':
        break;
      case 'vehicles':
        break;
  }
}
}
