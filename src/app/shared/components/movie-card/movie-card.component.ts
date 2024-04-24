import { Component, OnInit,Input} from '@angular/core';
import { dataFile,bookmarkData  } from '../../../../data';
import { BookmarkData, Data } from '../../interfaces';
import { loadBookmark, removeBookmark, saveBookmark } from '../../utils';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit{
  Data = dataFile;
  Bookmark=bookmarkData;

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
