import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie?:Movie = {id: 0, name: "", imageUrl: "", synopsis:"", year: 0};

  constructor(private movieService: MovieService) { }

  getMovies():void{
    //Al coger de la api habra que hacer esto 
    //this.movieService.getMovies()
    //  .subscribe(movies => this.movies = movies);
    this.movies = this.movieService.getMovies()
  }
  ngOnInit(): void {
    this.getMovies();
  }
  onSelect(movie: Movie):void{
    this.selectedMovie = movie;
  }
  deselectMovie(){
    this.selectedMovie = {id: 0, name: "", imageUrl: "", synopsis:"", year: 0};
  }
}
