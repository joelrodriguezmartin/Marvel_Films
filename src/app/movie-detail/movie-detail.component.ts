import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: Movie;
  //Variable utilizada para mostrar mas texto en las sinopsis TODO: Bindearla al padre para que al cambiar la seleccinada se resetee a false
  readMore = false;

  @Output() deselectEvent = new EventEmitter<string>();
  constructor(private movieService: MovieService) { }


  ngOnInit(): void {
  }
  /**
   * Función del hijo que lanza un evento que será capturado en el padre para deseleccionar peliculas en momentos determinados
   */
  deselectMovie(){
    this.deselectEvent.emit("");
  }
  /**
   * Función que llama al servicio de pelicula y le pasa los datos actuales para crear una nueva pelicula con ellos
   */
  createMovie() {
    this.movieService.createMovie(this.movie);
    this.deselectMovie();
  }
  /**
   * Función "update" al estar los datos bindeados bidireccionalmente la actualización es instantánea y esta funcion solo deselecciona
   */
  updateMovie() {
    this.deselectMovie();
  }
  /**
   * Función que confirma si el usuario quiere borrar la pelicula seleccionada y llama a el servicio para borrarla
   */
  deleteMovie() {
    if (confirm("Are you sure you want to delete this movie?")){
      this.movieService.deleteMovie(this.movie);
      this.deselectMovie();
    }
  }
}
