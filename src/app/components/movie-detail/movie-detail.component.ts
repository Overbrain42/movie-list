import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../../services/requests.service';
import { MovieDetails } from '../../static/interfaces';
import { displayedMovieDetails, imagePlaceholder } from '../../static/app.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit, OnDestroy {
  displayedDetails = displayedMovieDetails;
  movie: MovieDetails;
  subscription: Subscription;

  constructor(
    private moviesService: MoviesService,
    private requestsService: RequestsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params) => {
        const id = params.id;
        this.getMovie(id);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getMovie(id) {
    this.requestsService.getByID(id).subscribe((res: MovieDetails) => {
      if (res.Response !== 'True') {
        return;
      }
      this.movie = res;
    });
  }

  getPoster(movie) {
    return movie.Poster === 'N/A' ? imagePlaceholder : movie.Poster;
  }
}
