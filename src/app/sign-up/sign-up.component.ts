import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { passwordMatchValidator } from '../shared/password-match';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  router = inject(Router);
  // formbuilder= inject(FormBuilder);
  // signupForm: FormGroup;

  // constructor (){
  //   this.signupForm= new FormGroup({
  //     email: new FormControl(null,[Validators.required, Validators.email]),
  //     password: new FormControl(null,[Validators.required]),
  //     repeatPassword: new FormControl(null,[Validators.required])

  //   },{
  //     validators: passwordMatchValidator
  //   })
  // }

  constructor(private formbuilder: FormBuilder) {}

  signupForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required],
  }, {
    validators: passwordMatchValidator
  });

  get email() {
    return this.signupForm.controls['email'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  get repeatPassword() {
    return this.signupForm.controls['repeatPassword'];
  }

  get invalidEmail(){
    return this.email.invalid && this.email.dirty
  }

  get invalidPassword(){
    return this.password.invalid && this.password.dirty
  }

  get invalidRepeatPassword(){
    return this.password.invalid && this.password.dirty 
  }

  get misMatchPassword(){
    return this.signupForm.errors?.['passwordMismatch'] && this.repeatPassword.valid && this.password.valid
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
