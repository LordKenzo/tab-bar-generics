import { Component, OnInit, Input } from '@angular/core';
import { TabBarItem } from './tab-bar-item';
import {Animals, Favourites, Nations} from '../models/models';

@Component({
  selector: 'tab-bar',
  templateUrl: './tab-bar.component.html',
  styles: []
})
export class TabBarComponent<T extends Nations & Favourites & Animals> implements OnInit {

  @Input() collection: TabBarItem<T>;
  constructor() { }

  ngOnInit() {
  }

  tabHandler(item: T) {
    window.open(`http://it.wikipedia.org/wiki/${item.name}`);
  }

}
