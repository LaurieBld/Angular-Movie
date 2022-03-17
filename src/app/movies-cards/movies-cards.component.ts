import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Movie } from '../type';


@Component({
  selector: 'app-movies-cards',
  templateUrl: './movies-cards.component.html',
  styleUrls: ['./movies-cards.component.css']
})


export class MoviesCardsComponent implements OnInit {

  // Pour mettre les movies //
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}


