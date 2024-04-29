import { Component, inject, Input, OnInit } from '@angular/core';
import { Data, BookmarkData } from '../../../../shared/interfaces';
import { bookmarkData, playButton } from '../../../../../data';
import { UtilServiceService } from '../../../../shared/services/util-service.service';

@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [],
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.css',
})
export class TrendingCardComponent implements OnInit {
  playImg = playButton;

  utilService = inject(UtilServiceService);

  @Input()
  data!: Data;
  bookmarkData: BookmarkData = bookmarkData;
  isBookmarked = false;

  ngOnInit(): void {
    const bookmarkedItems: Data[] = this.utilService.loadBookmark();
    this.isBookmarked = !!bookmarkedItems.find(
      (bookmarkItem: Data) => this.data.id === bookmarkItem.id
    );
  }

  onHandleBookmark() {
    if (this.isBookmarked) {
      this.utilService.removeBookmark(this.data.id);
    } else {
      this.utilService.saveBookmark(this.data);
    }
    this.isBookmarked = !this.isBookmarked;
  }
}
