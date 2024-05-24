import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../../shared/components/movie-card/movie-card.component';
import { dataFile, bookmarkData } from '../../../../data';
import { FormService } from '../../../shared/services/form.service';
import { Data } from '../../../shared/interfaces';

@Component({
  selector: 'app-recommended-container',
  standalone: true,
  templateUrl: './recommended-container.component.html',
  styleUrl: './recommended-container.component.css',
  imports: [MovieCardComponent],
})
export class RecommendedContainerComponent implements OnInit {
  Data = dataFile;
  DataFile:Data[] = [];
  DataSlice = [];
  Bookmark = bookmarkData;
  input = '';

  ngOnInit(): void {
    this.formService.getValue().subscribe((res) => {
      this.input = res;
      this.fetchMovie(res);
    });

    this.fetchMovie(this.input);
  }

  fetchMovie(value: string) {
    this.DataFile = this.Data.slice (5).filter((item: any) =>
      item.description.toLowerCase().includes(value.toLowerCase())
    );
  }

  constructor(public formService: FormService) {}
}
