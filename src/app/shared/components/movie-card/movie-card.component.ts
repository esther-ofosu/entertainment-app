import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
  input,
  output,
} from '@angular/core';
import { bookmarkData, dataFile, playButton } from '../../../../data';
import { BookmarkData, Data } from '../../interfaces';
import { UtilServiceService } from '../../services/util-service.service';
import { url } from 'inspector';

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

  @Output() bookmarkEvent = new EventEmitter<null>();

  @Input()
  data!: Data;
  @Input()
  movie!: Data;
  bookmarkData: BookmarkData = bookmarkData;
  isBookmarked = false;

  ngOnInit(): void {
    const bookmarkedItems: Data[] = this.utilService.loadBookmark();
    this.isBookmarked = !!bookmarkedItems.find(
      (bookmarkItem: Data) => this.data?.id === bookmarkItem?.id
    );

    this.getScreenSize();
  }

  onHandleBookmark() {
    if (this.isBookmarked) {
      this.utilService.removeBookmark(this.data.id);
    } else {
      this.utilService.saveBookmark(this.data);
    }
    this.isBookmarked = !this.isBookmarked;
    this.bookmarkEvent.emit();
  }

  innerWidth!: number;

  getScreenSize() {
    this.innerWidth = window.innerWidth;
    console.log('innerwidth: ', { name: 'Esther' });
  }
}
