import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SWAPI_Answer} from "../Interfaces/swapi-answer";
import {People} from "../Interfaces/people";
import {Films} from "../Interfaces/films";
import {Planets} from "../Interfaces/planets";
import {Species} from "../Interfaces/species";
import {Starships} from "../Interfaces/starships";
import {Vehicles} from "../Interfaces/vehicles";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  constructor(private service: SearchService, private fb: FormBuilder) {
    this.initForm()

  }

  private results: number;
  private data: People | Films | Planets | Species | Starships | Vehicles;
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
    return this.service.getSearch(value).subscribe(results => {
      // this.data = this.results.results[0];
      // this.setData();
      this.results = results.count;
      return this.setData(results);
    });
  }
  setData(results) {
    switch (this.resources) {
      case 'people':
        return this.data = results.results[0] as People;
      case 'films':
        return this.data = results.results[0] as Films;
      case 'planets':
        return this.data = results.results[0] as Planets;
      case 'species':
        return this.data = results.results[0] as Species;
      case 'starships':
        return this.data = results.results[0] as Starships;
      case 'vehicles':
        return this.data = results.results[0] as Vehicles;
    }
  }
}
