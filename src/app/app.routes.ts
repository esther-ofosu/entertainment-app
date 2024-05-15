import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/main.component';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { BookmarkedMoviesComponent } from './bookmarked-movies/bookmarked-movies.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { authGuardGuard } from './auth/auth-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/main/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent, canActivate: [authGuardGuard] },
      { path: 'movies', component: MoviesComponent },
      { path: 'series', component: TvSeriesComponent },
      { path: 'bookmark', component: BookmarkedMoviesComponent },
    ],
  },
];
