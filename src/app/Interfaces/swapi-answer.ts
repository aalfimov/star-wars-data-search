export interface SwapiAnswer<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
