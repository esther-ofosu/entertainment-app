import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { UtilServiceService } from '../../services/util-service.service';
import { bookmarkData } from '../../../../data';
import { Data } from '../../interfaces';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let utilService: UtilServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[MovieCardComponent],
      providers:[UtilServiceService],
      imports: [MovieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    utilService=TestBed.inject(UtilServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data and bookmarkData',()=>{
    expect(component.data).toBeDefined();
    expect(component.bookmarkData).toEqual(bookmarkData);
  });

  it('should check if item is bookmarked on init',()=>{
    const bookmarkedItems: Data[]=component.utilService.loadBookmark();
    expect(component.isBookmarked).toBe(!!bookmarkedItems.find((bookmarkedItem: Data)=>component.data?.id === bookmarkedItem?.id));
  });

  it('should handle bookmark event',()=>{
    component.onHandleBookmark();
    expect(component.isBookmarked).toBe(!component.isBookmarked);
    expect(component.bookmarkEvent.emit).toHaveBeenCalledTimes(1);
  });

  it('should get screen size', ()=>{
    component.getScreenSize();
    expect(component.innerWidth).toBe(window.innerWidth);
  })
});
