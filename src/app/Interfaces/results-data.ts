// import {Films} from './films';
// import {People} from './people';
// import {Planets} from './planets';
// import {Species} from './species';
// import {Starships} from './starships';
// import {Vehicles} from './vehicles';
import {SwapiAnswer} from './swapi-answer';

// export interface ResultsData {
//   films: {
//     count: 0,
//     results: Films[]
//   };
//   people: {
//     count: 0,
//     results: People[]
//   };
//   planets: {
//     count: 0,
//     results: Planets[]
//   };
//   species: {
//     count: 0,
//     results: Species[]
//   };
//   starships: {
//     count: 0,
//     results: Starships[]
//   };
//   vehicles: {
//     count: 0,
//     results: Vehicles[]
//   };
// }

export interface ResultsData {
  films: SwapiAnswer;
  people: SwapiAnswer;
  planets: SwapiAnswer;
  species: SwapiAnswer;
  starships: SwapiAnswer;
  vehicles: SwapiAnswer;
}
