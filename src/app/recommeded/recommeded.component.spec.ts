import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommededComponent } from './recommeded.component';

describe('RecommededComponent', () => {
  let component: RecommededComponent;
  let fixture: ComponentFixture<RecommededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommededComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
