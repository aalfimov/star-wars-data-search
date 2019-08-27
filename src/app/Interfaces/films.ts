export interface Films {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: [];
  planets: [];
  starships: [];
  vehicles: [];
  species: [];
  created: string;
  edited: string;
  url: string;
}

export interface FilmsResults {
  count: number;
  next: string;
  previous: string;
  results: Films[];
}
