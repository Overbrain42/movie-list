import { Injectable } from '@angular/core';
import { Movie } from '../static/interfaces';
import { omdbapi } from '../static/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestsService {
  movies: Movie[] = [];
  constructor(
    protected http: HttpClient
  ) {
  }

  search(value) {
    const requestUrl = omdbapi + `s=${value}`;
    return this.http.request('GET', requestUrl);
  }

  getByID(value) {
    const requestUrl = omdbapi + `i=${value}`;
    return this.http.request('GET', requestUrl);
  }
}
