import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  inputValue= new BehaviorSubject<string>('')
  searchFormControl: FormControl=new FormControl('')
  processInput(value:string){
    this.inputValue.next(value)
    console.log('value',this.inputValue)
  }
  getValue():Observable<string>{
    return this.inputValue.asObservable();
  }
  constructor() { }
}
