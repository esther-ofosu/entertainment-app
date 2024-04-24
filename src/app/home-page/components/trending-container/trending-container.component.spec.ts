import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingContainerComponent } from './trending-container.component';

describe('TrendingContainerComponent', () => {
  let component: TrendingContainerComponent;
  let fixture: ComponentFixture<TrendingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
