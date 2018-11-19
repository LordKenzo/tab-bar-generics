import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Animals, Nations } from '../models/models';
import { TabBarItem } from './tab-bar-item';

Injectable()
export class TabBarService {
  constructor() {}

  getNations(): Observable<Nations[]> {
    return of([
      {id: 1, name: 'Italy', population: 55, title: 'Italy'},
      {id: 2, name: 'Germany', population: 60, title: 'Germany'},
      {id: 3, name: 'England', population: 58, title: 'England'},
      {id: 4, name: 'Japan', population: 88, title: 'Japan'}
    ]).pipe(
      delay(2000));
  }

  getAnimals(): Observable<TabBarItem<Animals>> {
    return of(new TabBarItem(
      [
        {
          id : 1,
          name: 'Gatto',
          title: 'Gatto'
        },
        {

          id : 2,
          name: 'Cane',
          title: 'Cane'
        }
      ])
    ).pipe(
      delay(500)
    );
  }
}
