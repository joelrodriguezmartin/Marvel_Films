import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CrudComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'movies', component: MovieComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'detail/:id', component: MovieDetailComponent},
  {path:'edit/:id', component: CrudComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
