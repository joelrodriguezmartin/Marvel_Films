import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: Movie;
  //Variable utilizada para mostrar mas texto en las sinopsis TODO: Bindearla al padre para que al cambiar la seleccinada se resetee a false
  readMore = false;

  constructor(private movieService: MovieService) { }


  ngOnInit(): void {
  }
  deselectMovie() {
    this.movieService.setSelectedMovie({ id: 0, name: "", imageUrl: "", synopsis: "", year: 0 });
  }
}
