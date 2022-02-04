import { Component, OnInit } from '@angular/core';

/**
  * @ngdoc component
  * @name MODULE_NAME.component:home
  * 
  *
  * @description
  * Componente home, muestra un pequeño texto informativo
  * 
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
