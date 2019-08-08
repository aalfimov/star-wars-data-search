import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SWAPI_Answer} from "../Interfaces/swapi-answer";

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

  private initForm() {
    this.searchForm = this.fb.group({
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
    this.service.getSearch(value.search).subscribe(results => this.results = results);
  }
}
