import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedContainerComponent } from './recommended-container.component';

describe('RecommendedContainerComponent', () => {
  let component: RecommendedContainerComponent;
  let fixture: ComponentFixture<RecommendedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
