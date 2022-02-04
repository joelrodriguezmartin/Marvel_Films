import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

/**
  * @ngdoc component
  * @name MODULE_NAME.component:movieDetail
  * 
  *
  * @description
  * Componente detalle, muestra la informacion de una pelicula concreta recibida por id
  * 
*/
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = { id: 0, name: "", imageUrl: "", synopsis: "", year: 0 };
  //Variable utilizada para mostrar mas texto en las sinopsis TODO: Bindearla al padre para que al cambiar la seleccinada se resetee a false
  readMore = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovie(id);
  }
  ngOnInit(): void {
    //this.getMovie();
  }
  /**
   * Recibimos la película en doCheck en lugar de init por problemas de sincronía. Si el id de la pelicula es 0, 
   * es decir si la película que intentamos encontrar por url no existe nos devuelve a la lista de peliculas
   */
  ngDoCheck(): void{
    this.getMovie();
  }
}
