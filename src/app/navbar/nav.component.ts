import { Component } from '@angular/core';
import { dataFile } from '../../data';
import { CommonModule, NgFor } from '@angular/common';
import { NavigationEnd, Router, RouterModule,UrlTree } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  data= dataFile;
  activeCategories:string[]=['bookmark','movies','series','home'];
  activeCategory:string='';
  isActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.updateActiveCategory();
      this.isActive = this.activeCategories.includes(this.activeCategory);
      }
    });
  }

  
  updateActiveCategory() {
    this.activeCategories.forEach(category => {
      if (this.router.url.includes(category)) {
        this.activeCategory = category;
      }
    });
  }
}

