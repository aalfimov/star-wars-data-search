import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {People} from '../Interfaces/people';
import {Films} from '../Interfaces/films';
import {Planets} from '../Interfaces/planets';
import {Species} from '../Interfaces/species';
import {Starships} from '../Interfaces/starships';
import {Vehicles} from '../Interfaces/vehicles';
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  constructor(private service: SearchService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private appcomp: AppComponent) {
    this.initForm();
  }

  private searchForm: FormGroup;
  private countResults: number;
  private resources: string;
  private dataResults: People | Films | Planets | Species | Starships | Vehicles;

  private initForm() {
    this.searchForm = this.fb.group({
      resources: ['', Validators.required],
      searchQuery: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.updateValue(params.get('resources'), params.get('searchQuery'));
    });
  }

  updateValue(resources: string, searchQuery: string) {
    return this.searchForm.setValue({resources: resources, searchQuery: searchQuery});
  }

  search() {
    this.appcomp.getSearch(this.searchForm.value.resources, this.searchForm.value.searchQuery);
    this.resources = this.searchForm.value.resources;
    this.service.getSearch(this.searchForm.value.resources, this.searchForm.value.searchQuery)
      .subscribe(results => {
        this.countResults = results.count;
        this.dataResults = results.results[0];
      });
  }

  cleanInputValue() {
    this.searchForm.value.searchQuery = ('');
  }

  // getSearchFromUrl(url, resources) {
  //   this.resources = resources;
  //   this.service.getSearchFromUrl(url)
  //     .subscribe(results => {
  //       console.log(results);
  //       this.countResults = results.count;
  //       this.dataResults = results.results[0];
  //     });
  // }
  // setData() {
  //   switch (this.resources) {
  //     case 'people':
  //       return this.dataResults as People;
  //     case 'films':
  //       return this.dataResults as Films;
  //     case 'planets':
  //       return this.dataResults as Planets;
  //     case 'species':
  //       return this.dataResults as Species;
  //     case 'starships':
  //       return this.dataResults as Starships;
  //     case 'vehicles':
  //       return this.dataResults as Vehicles;
  //   }
  // }
}
