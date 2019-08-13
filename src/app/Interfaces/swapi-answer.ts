import {UniversalData} from './universal-data';

export interface SwapiAnswer {
    count: number;
    next: string;
    previous: string;
    results: UniversalData[];
}
