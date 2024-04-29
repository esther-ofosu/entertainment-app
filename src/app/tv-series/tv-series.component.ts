import { Component } from '@angular/core';
import { MovieCardComponent } from "../shared/components/movie-card/movie-card.component";
import { MoviesComponent } from "../movies/movies.component";

@Component({
    selector: 'app-tv-series',
    standalone: true,
    templateUrl: './tv-series.component.html',
    styleUrl: './tv-series.component.css',
    imports: [MovieCardComponent, MoviesComponent],
    template: '<app-movies></app-movies>'
})
export class TvSeriesComponent {
   
}
