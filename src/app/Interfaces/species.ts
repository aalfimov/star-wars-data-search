export interface Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: [];
    films: [];
    url: string;
    created: string;
    edited: string;
}
export interface SpeciesResults {
  count: number;
  next: string;
  previous: string;
  results: Species[];
}
