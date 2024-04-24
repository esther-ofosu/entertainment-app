import { Component } from '@angular/core';
import { bookmarkData, dataFile } from '../../data';
import { MovieCardComponent } from '../shared/components/movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  Data = dataFile;
  Bookmark=bookmarkData;
}
