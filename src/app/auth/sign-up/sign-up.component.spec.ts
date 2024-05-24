import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { SupabaseService } from '../../supabase.service';
import { Router } from 'express';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let supabaseService: SupabaseService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [SignUpComponent],
      providers:[{
        provide: SupabaseService, useValue:{signUp: jasmine.createSpy('signUp')}
      },
      {provide: Router, useValue: {navigate: jasmine.createSpy('navigate')}}
    ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    supabaseService= TestBed.inject(SupabaseService);
    router= TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should  initialize the signUpForm with email, password, and repeatPassword controls',()=>{
    expect (component.signupForm.get('email')).toBeTruthy();
    expect (component.signupForm.get('password')).toBeTruthy();
    expect (component.signupForm.get('repeatPassword')).toBeTruthy();
  }); 
  
  it('should mark the form as invalid if email is invalid', ()=>{
    component.signupForm.get('email')?.setValue('invalid-email');
    expect(component.invalidEmail).toBe(true);
  });

  it('should mark form as invalid if password is less than 8 characters', ()=>{
    component.signupForm.get('password')?.setValue('short');
    expect(component.invalidPassword).toBe(true);
  });

  it ('should mark form as invalid if repeat password does not match', ()=>{
    component.signupForm.get('password')?.setValue('password123');
    component.signupForm.get('repeatPassword')?.setValue('password456');
    expect(component.misMatchPassword).toBe(true);
  });

  it('should call supabaseService.signUp and navigate to login page on sucessful signup', async ()=>{
    component.signupForm.get('email')?.setValue('test@example.com');
    component.signupForm.get('password')?.setValue('password123');
    component.signupForm.get('repeatPassword')?.setValue('password123');
    await component.createAccount();
    expect(supabaseService.signUp).toHaveBeenCalledWith({
      email:'test@example.com',
      password:'password123',
    });
    expect(localStorage.getItem('token')).toBeNull;
  })
});
