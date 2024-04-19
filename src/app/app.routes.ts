import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TrendComponent } from './trend/trend.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/main/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'movies', component: HomePageComponent },
      { path: 'series', component: HomePageComponent },
      { path: 'bookmark', component: HomePageComponent },
      { path: 'trend', component: TrendComponent  },

    ],
  },
];
