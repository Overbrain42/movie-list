import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackerComponent } from './components/tracker/tracker.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MatAutocompleteModule, MatButtonModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { RequestsService } from './services/requests.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [MoviesService, RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
