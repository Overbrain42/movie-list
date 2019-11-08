import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material';
import { MoviesService } from '../../services/movies.service';
import { Movie, Response } from '../../static/interfaces';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent {
  myControl = new FormControl();
  options: Movie[] = [];
  results: any[];
  @ViewChild(MatAutocompleteTrigger, {static: false}) autocomplete: MatAutocompleteTrigger;

  constructor(
    private moviesService: MoviesService,
    private requestsService: RequestsService
  ) {
  }

  search(input, search = false) {
    this.requestsService.search(input.value).subscribe((res: Response) => {
      if (res.Response !== 'True') {
        this.options = []; return;
      }
      this.options = res.Search;
      if (search) {
        this.results = res.Search;
        this.autocomplete.closePanel();
      }
    });
  }

  public inList(id) {
    return this.moviesService.get().find(item => item.imdbID === id);
  }

  onOptionSelect(option) {
    const selectedOption = this.options.find(item => item.Title === option.option.value);
    this.results = [selectedOption];
  }

  addMovie(movie) {
    this.moviesService.add(movie);
  }
}
