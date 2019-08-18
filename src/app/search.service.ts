import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwapiAnswer} from './Interfaces/swapi-answer';
import {UniversalData} from './Interfaces/universal-data';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly STAR_WARS_URL = 'https://swapi.co/api/';
  resources = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

  constructor(private http: HttpClient) {
    // console.log(this.resources.forEach( resources =>  fetch(`${this.STAR_WARS_URL}${resources}/`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))));
    console.log((resources) => {
      this.http.get(`${this.STAR_WARS_URL}${resources[0]}/`, {params: {search: 'r2-d2'}});
    });
  }

  getSearch(resources, searchQuery) {
    if (resources && searchQuery) {
      return this.http.get<SwapiAnswer>(`${this.STAR_WARS_URL}${resources}/`,
        {params: {search: searchQuery}});
    }
  }
  getSearchFromUrl(url) {
    return this.http.get<UniversalData>(url);
  }
}
