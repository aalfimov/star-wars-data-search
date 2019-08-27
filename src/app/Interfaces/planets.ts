export interface Planets {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: [];
    films: [];
    url: string;
    created: string;
    edited: string;
}

export interface PlanetsResults {
  count: number;
  next: string;
  previous: string;
  results: Planets[];
}
