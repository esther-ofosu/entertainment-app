import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  constructor(private fb:FormBuilder){}

  get email(){
    return this.loginForm.controls['email']
  }

  get password(){
    return this.loginForm.controls['password']
  }

  get isFormInvalid(){
    return this.loginForm.invalid
  }

  loginAccount(){
    if(!this.isFormInvalid){
      localStorage.setItem('token', JSON.stringify(this.loginForm.value.email))
    }
  }
}
