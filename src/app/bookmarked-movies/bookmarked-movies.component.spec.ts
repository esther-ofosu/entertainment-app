import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkedMoviesComponent } from './bookmarked-movies.component';
import { UtilServiceService } from '../shared/services/util-service.service';
import { MovieCardComponent } from '../shared/components/movie-card/movie-card.component';
import { MoviesComponent } from '../movies/movies.component';

describe('BookmarkedMoviesComponent', () => {
  let component: BookmarkedMoviesComponent;
  let fixture: ComponentFixture<BookmarkedMoviesComponent>;
  let utilService: UtilServiceService;
  const mockBookmarks=[
    {idy:1, title: 'Movie 1', category:'Movies'},
    {id:2, title: 'TV Series 1', category: 'TV Series'},
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[BookmarkedMoviesComponent],
      imports: [MovieCardComponent,MoviesComponent],
      providers:[
        {
          provide: UtilServiceService, useValue:{loadBookmark: jasmine.createSpy('loadBookmark')}
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmarkedMoviesComponent);
    component = fixture.componentInstance;
    utilService= TestBed.inject(UtilServiceService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize movies and series arrays based on bookmarks',()=>{
    utilService.loadBookmark= jasmine.createSpy().and.returnValue(mockBookmarks);
    component.init();
    expect(component.movies.length).toBe(1);
    expect(component.series.length).toBe(1);
  });

  it('should handle bookmark event by reinitializing movies and series',()=>{
    utilService.loadBookmark= jasmine.createSpy().and.returnValue(mockBookmarks);
    component.handleBookmark();
    expect(component.movies.length).toBe(1);
    expect(component.series.length).toBe(1);
  });
});
