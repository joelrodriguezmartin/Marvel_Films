import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';
import { TitleSubtitlePipe } from './title-subtitle.pipe';
import { PhasePipe } from './phase.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavHeaderComponent,
    MovieDetailComponent,
    TitleSubtitlePipe,
    PhasePipe
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
