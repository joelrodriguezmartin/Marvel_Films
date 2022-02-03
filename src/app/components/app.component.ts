import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvel_Films';
  constructor(private movieService: MovieService) { }
  /**
   * Al iniciar la aplicación creamos el servicio y hacemos petición 
   * a la API. Esto se ejecutara solo 1 vez
   */
  ngOnInit(): void {
    this.movieService.fetchMovies();
  }
}

