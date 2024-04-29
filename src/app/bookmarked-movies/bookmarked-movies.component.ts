import { Component, inject, OnInit } from '@angular/core';
import { MoviesComponent } from "../movies/movies.component";
import { Inject } from '@angular/core';
import { UtilServiceService } from '../shared/services/util-service.service';
import { Data } from '../shared/interfaces';
import { dataFile } from '../../data';

@Component({
    selector: 'app-bookmarked-movies',
    standalone: true,
    templateUrl: './bookmarked-movies.component.html',
    styleUrl: './bookmarked-movies.component.css',
    imports: [MoviesComponent]
})
export class BookmarkedMoviesComponent implements OnInit{
    LoadBookmark= inject(UtilServiceService)

    Data = dataFile;
    movies: Data[] = [];
    series: Data[] = [];    

    ngOnInit() {
        const bookmarks = this.LoadBookmark.loadBookmark();
        bookmarks.foreach((item: Data) => {
            if(item.category === 'Movie') this.movies.push(item)
            else this.series.push(item)
            console.log(this.movies);
            
        })
    }
}
