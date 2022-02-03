import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
    private location: Location) { }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovie(id);
  }
  ngOnInit(): void {
    //this.getMovie();
  }
  ngDoCheck(): void{
    this.getMovie();
  }

  deselectMovie() {
    this.movieService.setSelectedMovie({ id: 0, name: "", imageUrl: "", synopsis: "", year: 0 });
  }
}
