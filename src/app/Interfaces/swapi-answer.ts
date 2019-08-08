import {People} from "./people";

export interface SWAPI_Answer {
  count: number;
  next: string;
  previous: string;
  results: People[];
}
