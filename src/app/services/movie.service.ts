import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { FetchData } from '../model/fetchData';
import { MOVIES } from '../model/movie-mock';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  apiUrl = "https://mcuapi.herokuapp.com/api/v1/movies"
  movies: Movie[] = [];
  rawData: FetchData = {
    data: [{
      box_office: "",
      chronology: 0,
      cover_url: "",
      directed_by: "",
      duration: 0,
      id: 0,
      imdb_id: "",
      overview: "",
      phase: 0,
      post_credit_scenes: 0,
      release_date: "",
      saga: "",
      title: "",
      trailer_url: ""
    }]
  };

  selectedMovie: Movie = { id: 0, name: "", imageUrl: "", synopsis: "", year: 0 };
  /**
   * 
   * @returns Funcion que recibe los datos, actualmente de un mock
   */
  getMovies(): Movie[]/*:Observable<Movie[]>*/ {
    //Al recibir de la api habra que hacerlo observable y hacer fetch aqui
    return this.movies;
  }
  
  fetchMovies() {
    return this.http.get<FetchData>(this.apiUrl).subscribe(data => {
      data.data.forEach(element => {
        let newMovie: Movie = {
          id: element.id,
          name: element.title,
          imageUrl: element.cover_url == null ? "https://i.pinimg.com/originals/24/92/00/249200c431fe811110761709b303fcaf.jpg" : element.cover_url,
          synopsis: element.overview == null ? "No synopsis yet" : element.overview,
          year: element.release_date == null ? 0 : parseInt(element.release_date.slice(0, 4))
        }
        this.movies.push(newMovie);
      });
      this.movies.sort((a,b) => (a.id > b.id) ? 1 : -1);
    });
  }
  /**
   * Función que crea una nueva pelicula, recibida por parámetros. La introduce en el array de peliculas
   * @param movie 
   */
  createMovie(movie: any) {
    if (movie) {
      //Generamos los datos:
      let id = this.getLastMovie().id + 1;
      let newMovie: Movie = { id: id, name: movie.name, imageUrl: movie.imageUrl, synopsis: movie.synopsis, year: movie.year };
      this.movies.push(newMovie);
    }
  }
  /**
   * Funcion que actualiza la pelicula
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
  getMovie(id: number): Movie {
    const movie = this.movies.find(h => h.id === id);
    if (movie != undefined) {
      return movie;
    }else return this.selectedMovie;
  }
  setSelectedMovie(movie: Movie) {
    this.selectedMovie = movie;
  }
  getSelectedMovie() {
    return this.selectedMovie;
  }
}
