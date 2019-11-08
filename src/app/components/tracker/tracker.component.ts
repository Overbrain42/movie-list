import { Component, OnInit } from '@angular/core';
import { Movie } from '../../static/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit() {
    this.movies = this.moviesService.get();
  }

  remove(movie) {
    this.moviesService.remove(movie);
    this.movies = this.moviesService.get();
  }
}
