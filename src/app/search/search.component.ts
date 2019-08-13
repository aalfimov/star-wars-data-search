import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {SearchResultComponent} from "../search-result/search-result.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  constructor(private service: SearchService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private results: SearchResultComponent) {
    this.initForm();
  }

  private searchForm: FormGroup;


  private initForm() {
    this.searchForm = this.fb.group({
      resources: ['', Validators.required],
      searchQuery: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.updateValue(params.get('resources'), params.get('searchQuery'));
      if (this.searchForm.valid) {
        this.results.search();
      }
    });
  }

  updateValue(resources: string, searchQuery: string) {
    return this.searchForm.setValue({resources: resources, searchQuery: searchQuery});
  }

  cleanInputValue() {
    this.searchForm.value.searchQuery = ('');
  }

  search() {
    this.results.search();
  }
}
