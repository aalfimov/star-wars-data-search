import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  constructor(private service: SearchService, private fb: FormBuilder) {
    this.initForm()
  }

  private results: Observable<Object>;
  private searchForm: FormGroup;
  private initForm() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  search({valid, value}){
    if (!valid) {
      console.error('invalid value');
      return;
    }
    this.results = this.service.getSearch(value.search);
    console.log(this.results);
  }
}
