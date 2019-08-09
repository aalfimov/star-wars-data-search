import {People} from "./people";
import {Films} from "./films";
import {Planets} from "./planets";
import {Species} from "./species";
import {Starships} from "./starships";
import {Vehicles} from "./vehicles";

export interface SWAPI_Answer {
  count: number;
  next: string;
  previous: string;
  results: [{}];
}
