import { Component } from '@angular/core';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { dataFile,bookmarkData } from '../../../../data';

@Component({
  selector: 'app-trending-container',
  standalone: true,
  imports: [TrendingCardComponent],
  templateUrl: './trending-container.component.html',
  styleUrl: './trending-container.component.css'
})
export class TrendingContainerComponent {
  Data = dataFile;
  DataSlice = this.Data.slice(0, 5);
  Bookmark=bookmarkData;
}
