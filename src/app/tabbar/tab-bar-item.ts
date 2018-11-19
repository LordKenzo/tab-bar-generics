import {Nations, Favourites, Animals} from '../models/models';

export class TabBarItem<T extends Nations | Favourites | Animals> {


  items: T[];
  constructor(items: Array<T>) {
    this.items = items;
  }
}
