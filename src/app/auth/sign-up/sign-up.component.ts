import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { passwordMatchValidator } from '../../shared/password-match';
import { SupabaseService } from '../../supabase.service';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { User } from '../../shared/interfaces';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  router = inject(Router);
  supabaseService = inject(SupabaseService);

  signupForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      repeatPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: passwordMatchValidator,
    }
  );

  get email() {
    return this.signupForm.controls['email'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  get repeatPassword() {
    return this.signupForm.controls['repeatPassword'];
  }

  get invalidEmail() {
    return this.email.invalid && this.email.dirty;
  }

  get invalidPassword() {
    return this.password.invalid && this.password.dirty;
  }

  get invalidRepeatPassword() {
    return this.password.invalid && this.password.dirty;
  }

  get misMatchPassword() {
    return (
      this.signupForm.errors?.['passwordMismatch'] &&
      this.repeatPassword.valid &&
      this.password.valid
    );
  }

  async createAccount() {
    const user = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    } as User;
    if (!this.signupForm.valid) return;
    await this.supabaseService.signUp(user);
    localStorage.removeItem('token')
  }
}
