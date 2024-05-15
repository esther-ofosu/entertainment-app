import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router =inject(Router)

  const Token= localStorage.getItem('token')
  if(!Token){
    router.navigateByUrl('/login')
    return false
  }

  return true;
};
