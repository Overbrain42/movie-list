import { Injectable } from '@angular/core';
import { Movie } from '../static/interfaces';

@Injectable()
export class MoviesService {
  movies: Movie[] = [];
  constructor(
  ) {
    this.movies = JSON.parse(localStorage.getItem('movies')) || [];
  }

  add (movie: Movie) {
    const movieAdded = this.movies.find(item => item.imdbID === movie.imdbID);
    if (!movieAdded) {
      this.movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(this.movies));
    }
  }

  remove (movie: Movie) {
    this.movies = this.movies.filter(item => item.imdbID !== movie.imdbID);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  get() {
    return this.movies;
  }
}
