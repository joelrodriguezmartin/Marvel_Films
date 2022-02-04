import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animation } from '../animations/animations';
import { MovieService } from '../services/movie.service';
import {MatSidenavModule} from '@angular/material/sidenav';
/**
  * @ngdoc component
  * @name MODULE_NAME.component:components
  * 
  *
  * @description
  * Componente principal de la aplicación, punto de entrada de los datos de la API
  * 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animation
  ]
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

