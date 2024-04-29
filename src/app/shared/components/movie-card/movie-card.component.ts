import { Component, Input, OnInit, inject } from '@angular/core';
import { bookmarkData, dataFile, playButton } from '../../../../data';
import { BookmarkData, Data } from '../../interfaces';
import { UtilServiceService } from '../../services/util-service.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  Data = dataFile;
  Bookmark = bookmarkData;
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

    // this.utilService.bookmarkStateChange.subscribe(() => {
    //   console.log('change');

    //   this.onHandleBookmark();
    // });
  }

  onHandleBookmark() {
    if (this.isBookmarked) {
      this.utilService.removeBookmark(this.data.id);
    } else {
      this.utilService.saveBookmark(this.data);
    }
    this.isBookmarked = !this.isBookmarked;
  }

  filteredMovies = this.data;

  // onFilterByCategory(){
  //   this.filteredMovies= this.data.filter((data: { category: string; }) =>data.category =='Movie')
  // }
}
