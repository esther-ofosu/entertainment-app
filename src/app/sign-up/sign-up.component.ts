import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  router = inject(Router);
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  get email() {
    return this.signupForm.controls['email'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  get repeatPassword() {
    return this.signupForm.controls['repeatPassword'];
  }

  get isFormInvalid(){
    return this.signupForm.invalid;
  }

  createAccount() {
    if(!this.isFormInvalid){
      console.log(this.signupForm.value)
      console.log('form created');
    }
    }
  }
