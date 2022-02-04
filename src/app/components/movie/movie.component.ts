import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';

import { MovieService } from 'src/app/services/movie.service';

/**
  * @ngdoc component
  * @name MODULE_NAME.component:movie
  * 
  *
  * @description
  * Componente que muestra la lista de películas de la aplicacion
  * 
*/
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  
  constructor(private movieService: MovieService) { }

  getMovies():void{
    this.movies = this.movieService.getMovies();
  }
  ngOnInit(): void {
    this.getMovies();
  }
}
