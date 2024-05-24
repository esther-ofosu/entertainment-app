import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let router: Router;

  beforeEach(async ()=> { 
    await TestBed.configureTestingModule({ 
      declarations: [NavComponent],
      imports: [NavComponent,CommonModule],
      providers:[Router]
    })
    .compileComponents();
    component = fixture.componentInstance;
    fixture.detectChanges();
    router= TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update active category based on router events',()=>{
    const navigationEndEvent= new NavigationEnd(1, 'main/home', 'main/home'); spyOn(router.events, 'subscribe').and.callFake((callback:any)=>callback(navigationEndEvent));
    component.updateActiveCategory();
    expect(component.activeCategory).toBe('home');
  });

  it('should set isActive to true for active category',()=>{
    component.activeCategories= ['home'];
    component.activeCategory='home';
    component.isActive=false;
    component.updateActiveCategory();
    expect(component.isActive).toBe(true);
  })
});
