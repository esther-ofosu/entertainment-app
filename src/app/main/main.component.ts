import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../navbar/nav.component';
import { SearchComponent } from '../search/search.component';
import {
  Navigation,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent, SearchComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  router = inject(Router);

  ngOnInit(): void {
   
  }
}
