import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './movie-mock';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  movies: Movie[] = []
  /**
   * 
   * @returns Funcion que recibe los datos, actualmente de un mock
   */
  getMovies(): Movie[]/*:Observable<Movie[]>*/ {
    //Al recibir de la api habra que hacerlo observable y hacer fetch aqui
    this.movies = MOVIES;
    return this.movies;
  }
  /**
   * Función que crea una nueva pelicula, recibida por parámetros. La introduce en el array de peliculas
   * @param movie 
   */
  createMovie(movie: any) {
    if (movie){
      //Generamos los datos:
      let id = this.getLastMovie().id+1;
      let newMovie: Movie = {id:id, name:movie.name, imageUrl: movie.imageUrl, synopsis: movie.synopsis, year: movie.year};
      this.movies.push(newMovie);
    }
  }
  /**
   * TODO: NADA
   */
  updateMovie(movie: any, selectedMovie: any) {
    let idInArray = this.movies[this.movies.indexOf(selectedMovie)].id;
    movie.id = idInArray;
    this.movies[this.movies.indexOf(selectedMovie)] = movie;
  }
  /**
   * Función que borra del array la película recibida por parámetros
   * @param movie 
   */
  deleteMovie(movie: any) {
    this.movies.splice(this.movies.indexOf(movie), 1);

  }
  /**
   * Función que devuelve la última pelicula del array, utilizada principalmente para generar nuevos ids
   * @returns 
   */
  getLastMovie(): Movie {
    return this.movies[this.movies.length - 1];
  }
}
