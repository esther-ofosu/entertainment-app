import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [LoginComponent, ReactiveFormsModule, RouterModule, CommonModule, JsonPipe]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the loginForm with email and password controls',()=>{
    expect(component.loginForm.get('email')).toBeTruthy();
    expect(component.loginForm.get('password')).toBeTruthy();
  });

  it ('should mark form as invalid if email or password is empty', ()=>{
    component.loginForm.get('email')?.setValue('');
    component.loginForm.get('password')?.setValue('');
    expect(component.isFormInvalid).toBe(true);
  });

  it('should mark form as valid if email and password are provided',()=>{
    component.loginForm.get('email')?.setValue('test@example.com');
    component.loginForm.get('password')?.setValue('password123');
    component.loginAccount();
    const storedEmail = localStorage.getItem('token');
    expect(storedEmail).toEqual(JSON.stringify('test@example.com'));
  });

});
