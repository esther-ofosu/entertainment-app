import { Component, inject, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { UtilServiceService } from '../shared/services/util-service.service';
import { Data } from '../shared/interfaces';
import { dataFile } from '../../data';
import { MovieCardComponent } from '../shared/components/movie-card/movie-card.component';

@Component({
  selector: 'app-bookmarked-movies',
  standalone: true,
  templateUrl: './bookmarked-movies.component.html',
  styleUrl: './bookmarked-movies.component.css',
  imports: [MoviesComponent, MovieCardComponent],
})
export class BookmarkedMoviesComponent implements OnInit {
  LoadBookmark = inject(UtilServiceService);

  movietitle: string = 'Bookedmarked Movies';
  tvSeriesTitle: string = 'Bookedmarked Tv Series';
  Data = dataFile;
  movies: Data[] = [];
  series: Data[] = [];

  ngOnInit() {
    this.init();
  }

  init() {
    this.series = [];
    this.movies = [];
    const bookmarks: Data[] = this.LoadBookmark.loadBookmark();
    bookmarks.forEach((item: Data) => {
      if (item.category === 'Movie') this.movies.push(item);
      else this.series.push(item);
    });
  }

  handleBookmark() {
    this.init();
  }
}
