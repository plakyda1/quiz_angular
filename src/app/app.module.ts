import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/*
 * Components
 */
import { AppComponent } from './app.component';

import { CategoriesComponent } from './categories/categories.component';
import { GamesComponent } from './games/games.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CategoriesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'qa', component: QuestionsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    QuestionsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


