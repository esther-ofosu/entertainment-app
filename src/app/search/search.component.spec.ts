import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormService } from '../shared/services/form.service';
import { dataFile } from '../../data';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let formService: FormService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[SearchComponent],
      imports: [SearchComponent],
      providers:[FormService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    formService= TestBed.inject(FormService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize searchData with dataFile',()=>{
    expect(component.searchData).toEqual(dataFile);
  });

  it('should update searchTerm and call processInput on form service', ()=>{
    const inputElement= fixture.nativeElement.querySelector('input');
    inputElement.value= 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchTerm).toBe('test');
    expect(formService.processInput).toHaveBeenCalledWith('test');
  });

  it('should return the searchFormControl from form service',()=>{
    expect(component.formControl).toBe(formService.searchFormControl);
  });
});
