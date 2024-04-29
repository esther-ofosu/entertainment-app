import { Component, inject, Input, input, OnInit } from '@angular/core';
import { bookmarkData, dataFile } from '../../data';
import { MovieCardComponent } from '../shared/components/movie-card/movie-card.component';
import { NavigationEnd, Router } from '@angular/router';
import { log } from 'console';
import { Data } from '../shared/interfaces';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  template: '<h2>{{title}}</h2>',
})
export class MoviesComponent implements OnInit {
  Data = dataFile;
  Bookmark = bookmarkData;
  router = inject(Router);

  @Input()
  title: string = 'Movies';
  @Input() 
  movie!:Data;

  ngOnInit(): void {
    const path = this.router.url.split('/')[2];
    this.Data = this.Data.filter((item: Data) => {
      let category = '';
      const categorySplit = item.category.split(' ');
      if (categorySplit.length > 1) category = categorySplit[1].toLowerCase();
      else category = categorySplit[0].toLowerCase() + 's';

      console.log(category);

      return category === path;
    });
  }
}
