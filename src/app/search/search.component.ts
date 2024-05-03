import { Component, OnInit } from '@angular/core';
import { bookmarkData, dataFile } from '../../data';
import { BookmarkData, Data } from '../shared/interfaces';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieCardComponent } from '../shared/components/movie-card/movie-card.component';
import { FormService } from '../shared/services/form.service';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [FormsModule, MovieCardComponent, ReactiveFormsModule],
})
export class SearchComponent implements OnInit {
  searchData: Data[] = dataFile;
  searchTerm: string = '';

  ngOnInit(): void {
    console.log(this.searchData);
    this.searchData = dataFile;
  }
  onSearch(event: Event) {
    const search = event.target as HTMLInputElement;
    this.searchTerm = search.value;
    this.formService.processInput(this.searchTerm);
  }

  constructor(public formService: FormService) {}
  get formControl() {
    return this.formService.searchFormControl;
  }
}
