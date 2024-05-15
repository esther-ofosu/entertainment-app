import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../src/environments/environment';
import { User } from './shared/interfaces';
import { FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;


  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

  }

  async signUp(user: User) {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email: user.email,
        password: user.password,
      });
      if (error) {
        alert(`supabase error: ${error.message}`)
        console.error(`supabase error: ${error.message}`);
      } else {
        console.log(data);
      }
    } catch (error) {
      alert(`network error: ${error}`);
    }
  
  }
}
