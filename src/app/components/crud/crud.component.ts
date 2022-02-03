import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
/**
 * Componente utilizado para crear y modificar películas de la lista. Las recibe del servicio.
 */
export class CrudComponent implements OnInit {
  movie: Movie = { id: 0, name: "", imageUrl: "", synopsis: "", year: 0 };
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private location:Location,
    private router:Router) { }
  /**
   * Recoge la variable id de la URL y la busca en el array del servicio
   */
  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovie(id);
  }
  ngOnInit(): void {
    //this.getMovie(); //En el onInit da problemas de sincronía la recogida de datos
  }
  /**
   * Esta función se ejecuta cuando Angular detecta cambios en la estructura de datos. Ejecutamos en ella 
   * la busqueda de la película para asegurar la sincronía de datos
   */
  ngDoCheck(): void{
    this.getMovie(); 
  }
  /**
   * Función que llama al servicio de pelicula y le pasa los datos actuales para crear una nueva pelicula con ellos
   */
  createMovie(name: string, imageUrl: string, synopsis: string, year: string) {
    let movie: Movie = { id: 0, name: name, imageUrl: imageUrl, synopsis: synopsis, year: parseInt(year) };
    this.movieService.createMovie(movie);
    this.router.navigate(["/movies"]);
  }
  /**
   * Función que actualiza el registro de la película seleccionada por este componente (recibida por id en la url)
   */
  updateMovie(name: string, imageUrl: string, synopsis: string, year: string) {
    let movie: Movie = { id: 0, name: name, imageUrl: imageUrl, synopsis: synopsis, year: parseInt(year) };
    this.movieService.updateMovie(movie, this.movie);
    this.router.navigate(["/movies"]);
  }
  /**
   * Función que confirma si el usuario quiere borrar la pelicula seleccionada y llama a el servicio para borrarla
   */
  deleteMovie() {
    if (confirm("Are you sure you want to delete this movie?")) {
      this.movieService.deleteMovie(this.movie);
      this.router.navigate(["/movies"]);
    }
  }
}
