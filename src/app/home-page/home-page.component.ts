import { Component } from '@angular/core';
import { RecommendedContainerComponent } from './components/recommended-container/recommended-container.component';
import { TrendingContainerComponent } from './components/trending-container/trending-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecommendedContainerComponent, TrendingContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
