import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  
  constructor(private movieService: MovieService) { }

  getMovies():void{
    //Al coger de la api habra que hacer esto 
    //this.movieService.getMovies()
    //  .subscribe(movies => this.movies = movies);
    this.movies = this.movieService.getMovies();
  }
  ngOnInit(): void {
    this.getMovies();
  }
  /*onSelect(movie: Movie):void{
    this.movieService.setSelectedMovie(movie);
  }
  deselectMovie(){
    this.movieService.setSelectedMovie({id: 0, name: "", imageUrl: "", synopsis:"", year: 0});
  }
  getSelectedMovie(){
    return this.movieService.getSelectedMovie();
  }*/
}
