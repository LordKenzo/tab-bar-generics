import { Component, OnInit} from '@angular/core';
import { TabBarItem } from './tabbar/tab-bar-item';
import {Nations, Favourites, Animals} from './models/models';
import {TabBarService} from './tabbar/tab-bar.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  countries: TabBarItem<Nations>;
  favourites: TabBarItem<Favourites>;
  animals$: Observable<TabBarItem<Animals>>;

  constructor(private service: TabBarService) {}

  ngOnInit() {

    this.service.getNations().pipe(
      tap(nations => console.log(nations[0].name))
    ).subscribe(
      nations => this.countries = new TabBarItem(nations)
    );

    this.favourites = new TabBarItem([
      {id: 1, url: 'http://1', title: '1'},
      {id: 2, url: 'http://2', title: '2'},
      {id: 3, url: 'http://3', title: '3'}
    ]);
    console.log(this.favourites.items[0].url);

    this.animals$ = this.service.getAnimals();
  }
}
