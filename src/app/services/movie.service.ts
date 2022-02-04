import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { FetchData } from '../model/fetchData';
import { MOVIES } from '../model/movie-mock';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**
  * @ngdoc service
  * @name MODULE_NAME.SERVICE_NAME
  * 
  * @description
  * Servicio que controla la entrada y salida de información de la app, comunicandose con la api y guardando los datos temporales
  *
  * @example
  * example...
**/
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  /*Url de la api para recoger los datos*/
  apiUrl = "https://mcuapi.herokuapp.com/api/v1/movies"
  /*Array de películas que usaremos como almacén de datos*/
  movies: Movie[] = [];
  /*Objeto en el que recogeremos los datos de la API en el formato en el que vienen*/
  rawData?: FetchData;
  /*Objeto movie que solo se utiliza para devolverlo en caso de no existir un id*/
  selectedMovie: Movie = { id: 0, name: "", imageUrl: "", synopsis: "", year: 0 };
  /**
   * Función que devuelve el array de películas
   */
  getMovies(): Movie[] {
    return this.movies;
  }
  /**
   * Función que recoge los datos de la API y los transforma al formato adecuado.
   * Una vez obtenidos los guarda en el array de almacenamiento
   * @returns 
   */
  fetchMovies() {
    return this.http.get<FetchData>(this.apiUrl).subscribe(data => {
      data.data.forEach(element => {
        let newMovie: Movie = {
          id: element.id,
          name: element.title,
          imageUrl: element.cover_url == null ? "" : element.cover_url,
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
   * Funcion que actualiza la pelicula recibida
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
   * Usamos el último sin preocuparnos porque los datos son ordenados en el fetch
   * @returns 
   */
  getLastMovie(): Movie {
    return this.movies[this.movies.length - 1];
  }
  /**
   * Funcion que devuelve la película con el id recibido por parámetros. En caso de no encontrarla devuelve una vacía.
   * Esto permite que si desde url se introduce una no existente se muestre el formulario de creación
   * @param id 
   * @returns 
   */
  getMovie(id: number): Movie {
    const movie = this.movies.find(h => h.id === id);
    if (movie != undefined) {
      return movie;
    }else return this.selectedMovie;
  }
}
