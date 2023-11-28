import { Injectable } from '@angular/core';
import { RaceModel } from './Model/race.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  races: RaceModel[]= [];

  list () {
    this.races = [
      { name: 'London' },
      { name: 'Lyon' }
    ];
    return this.races;
  }
}
