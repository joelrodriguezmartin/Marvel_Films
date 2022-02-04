import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieService } from './services/movie.service';
import { TitleSubtitlePipe } from './pipes/title-subtitle.pipe';
import { PhasePipe } from './pipes/phase.pipe';
import { CrudComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 
/**
  * @ngdoc overview
  * @name MODULE_NAME.module:MODULE_NAME
  *
  * @description
  * Modulo de la app
  * 
  * @example
  *  <b>script.js</b>
  *  <pre>
  *  import MODULE_NAME from './location...'
  *  angular.module('myModule', [MODULE_NAME]);
  *  </pre>
  * 
*/
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavHeaderComponent,
    MovieDetailComponent,
    TitleSubtitlePipe,
    PhasePipe,
    CrudComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
