import {Films} from './films';
import {People} from './people';
import {Planets} from './planets';
import {Species} from './species';
import {Starships} from './starships';
import {Vehicles} from './vehicles';

export interface ResultsData {
  filmsResults: Films[];
  peopleResults: People[];
  planetsResults: Planets[];
  speciesResults: Species[];
  starshipsResults: Starships[];
  vehiclesResults: Vehicles[];
}
