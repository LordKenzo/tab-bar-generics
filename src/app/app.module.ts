import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabBarComponent } from './tabbar/tab-bar.component';
import {TabBarService} from './tabbar/tab-bar.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ],
  declarations: [
    AppComponent,
    TabBarComponent],
  providers: [ TabBarService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
