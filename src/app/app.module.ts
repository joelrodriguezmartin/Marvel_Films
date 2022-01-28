import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieService } from './services/movie.service';
import { TitleSubtitlePipe } from './pipes/title-subtitle.pipe';
import { PhasePipe } from './pipes/phase.pipe';
import { CrudComponent } from './components/crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavHeaderComponent,
    MovieDetailComponent,
    TitleSubtitlePipe,
    PhasePipe,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
