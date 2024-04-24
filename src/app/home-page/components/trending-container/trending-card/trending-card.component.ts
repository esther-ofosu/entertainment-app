import { Component, Input, OnInit } from '@angular/core';
import { Data, BookmarkData } from '../../../../shared/interfaces';
import {
  loadBookmark,
  removeBookmark,
  saveBookmark,
} from '../../../../shared/utils';
import { bookmarkData } from '../../../../../data';

@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [],
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.css',
})
export class TrendingCardComponent implements OnInit {
  @Input()
  data!: Data;
  bookmarkData: BookmarkData = bookmarkData;
  isBookmarked = false;

  ngOnInit(): void {
    const bookmarkedItems: Data[] = loadBookmark();
    this.isBookmarked = !!bookmarkedItems.find(
      (bookmarkItem: Data) => this.data.id === bookmarkItem.id
    );
  }

  onHandleBookmark() {
    if (this.isBookmarked) {
      removeBookmark(this.data.id);
    } else {
      saveBookmark(this.data);
    }
  }
}
