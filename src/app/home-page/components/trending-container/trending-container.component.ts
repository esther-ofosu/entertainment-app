import { Component, OnInit } from '@angular/core';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { dataFile, bookmarkData } from '../../../../data';
import { FormService} from '../../../shared/services/form.service';

@Component({
  selector: 'app-trending-container',
  standalone: true,
  imports: [TrendingCardComponent],
  templateUrl: './trending-container.component.html',
  styleUrl: './trending-container.component.css',
})
export class TrendingContainerComponent implements OnInit {
  Data = dataFile;
  DataSlice = []
  Bookmark = bookmarkData;
  input = '';

  ngOnInit(): void {
    this.formService.getValue().subscribe((res)=> {
      this.input=res
      this.fetchMovie(res)
    });
    this.fetchMovie(this.input)
  }

  fetchMovie(value:string){
    this.DataSlice= this.Data.slice (0,5).filter((item:any)=>item.description.toLowerCase().includes(value.toLowerCase()))
  }

  constructor(public formService: FormService) {}
}
