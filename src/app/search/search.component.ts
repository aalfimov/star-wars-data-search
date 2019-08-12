import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {People} from '../Interfaces/people';
import {Films} from '../Interfaces/films';
import {Planets} from '../Interfaces/planets';
import {Species} from '../Interfaces/species';
import {Starships} from '../Interfaces/starships';
import {Vehicles} from '../Interfaces/vehicles';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  constructor(private service: SearchService, private fb: FormBuilder) {
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
  }

  search() {
    this.resources = this.searchForm.value.resources;
    this.service.getSearch(this.searchForm.value.resources, this.searchForm.value.searchQuery)
      .subscribe(results => {
        this.countResults = results.count;
        this.dataResults = results.results[0];
      });
  }

  getSearchFromUrl(url, resources) {
    this.resources = resources;
    this.service.getSearchFromUrl(url)
      .subscribe(results => {
        console.log(results);
        this.countResults = results.count;
        this.dataResults = results.results[0];
      });
  }

  cleanInputValue() {
    this.searchForm.value.searchQuery = ('');
  }

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
