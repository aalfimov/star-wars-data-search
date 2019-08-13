import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from "../app.component";
import {People} from "../Interfaces/people";
import {Films} from "../Interfaces/films";
import {Planets} from "../Interfaces/planets";
import {Species} from "../Interfaces/species";
import {Starships} from "../Interfaces/starships";
import {Vehicles} from "../Interfaces/vehicles";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  private countResults: number;
  value;
  resources: string;
  private dataResults: People | Films | Planets | Species | Starships | Vehicles;
  constructor(private service: SearchService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private appcomp: AppComponent) {
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
      // if (this.searchForm.valid) {
      //   this.results.search();
      // }
    });
  }

  updateValue(resources: string, searchQuery: string) {
    return this.searchForm.setValue({resources: resources, searchQuery: searchQuery});
  }

  cleanInputValue() {
    this.searchForm.value.searchQuery = ('');
  }

  search() {
    this.appcomp.getSearch(this.value.resources, this.value.searchQuery);
    this.service.getSearch(this.value.resources, this.value.searchQuery)
      .subscribe(results => {
        this.countResults = results.count;
        this.dataResults = results.results[0];
      });
  }
  // search() {
  //   this.results.search();
  // }
}
