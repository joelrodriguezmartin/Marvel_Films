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
export class CrudComponent implements OnInit {
  movie: Movie = { id: 0, name: "", imageUrl: "", synopsis: "", year: 0 };
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private location:Location,
    private router:Router) { }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovie(id);
  }
  ngOnInit(): void {
    this.getMovie();
  }

  /**
   * Función del hijo que lanza un evento que será capturado en el padre para deseleccionar peliculas en momentos determinados
   */
  deselectMovie() {
    this.movieService.setSelectedMovie({ id: 0, name: "", imageUrl: "", synopsis: "", year: 0 });
    let form = document.getElementById("inputForm") as HTMLFormElement;
    form.reset();
  }
  /**
   * Función que llama al servicio de pelicula y le pasa los datos actuales para crear una nueva pelicula con ellos
   */
  createMovie(name: string, imageUrl: string, synopsis: string, year: string) {
    let movie: Movie = { id: 0, name: name, imageUrl: imageUrl, synopsis: synopsis, year: parseInt(year) };
    this.movieService.createMovie(movie);
    this.router.navigate(["/movies"]);
    //this.deselectMovie();
  }
  /**
   * Función "update" al estar los datos bindeados bidireccionalmente la actualización es instantánea y esta funcion solo deselecciona
   */
  updateMovie(name: string, imageUrl: string, synopsis: string, year: string) {
    let movie: Movie = { id: 0, name: name, imageUrl: imageUrl, synopsis: synopsis, year: parseInt(year) };
    this.movieService.updateMovie(movie, this.movie);
    this.router.navigate(["/movies"]);
    //this.deselectMovie();
  }
  /**
   * Función que confirma si el usuario quiere borrar la pelicula seleccionada y llama a el servicio para borrarla
   */
  deleteMovie() {
    if (confirm("Are you sure you want to delete this movie?")) {
      this.movieService.deleteMovie(this.movie);
      this.router.navigate(["/movies"]);
      //this.deselectMovie();
    }
  }
}
