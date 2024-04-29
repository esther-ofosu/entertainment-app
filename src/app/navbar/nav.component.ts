import { Component } from '@angular/core';
import { dataFile } from '../../data';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule,UrlTree } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  data= dataFile;
  isActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.isActive = this.router.isActive('/bookmark', true);
    });
  }
}
