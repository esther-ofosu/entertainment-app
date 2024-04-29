import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { BookmarkedMoviesComponent } from './bookmarked-movies/bookmarked-movies.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/main/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'series', component: TvSeriesComponent},
      { path: 'bookmark', component: BookmarkedMoviesComponent},
      {path: '**', component: NotfoundComponent}

    ],
  },
];
