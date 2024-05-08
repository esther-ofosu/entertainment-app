import {AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control:AbstractControl): ValidationErrors | null =>{
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');

    return password && repeatPassword && password.value != repeatPassword.value ? {passwordMismatch:true} : null

}
