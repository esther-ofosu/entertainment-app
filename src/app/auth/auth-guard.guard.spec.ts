import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
//import {HttpClientTestingModule} from '@angular/common/http/testing';

import { authGuardGuard } from './auth-guard.guard';

describe('authGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //imports: [HttpClientTestingModule]
  });
  //service= TestBed.inject(HttpTestingController);

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  // it(('should be created'=>{
  //   expect(service).toBeTruthy()
  // }))

  // it('should get all users',()=>{
  //   Service.getAllUsers().subscribe((users:any) => {
  //     expect(users).toBeTruthy()
  //     expect (users.length).toBe(3)
  //     const secondUser= users.find((user:any)=> users.id ===2)
  //     expect(secondUser.name).toBe('Esther O');
  //   })

  //   const dataReq= testingController.expectOne('api/users');
  //   expect(dataReq.request.method).toEqual(GET);
  //   dataReq.flush(Object.values(Data))
  // });

  // afterEach(()=>{
  //   testingController.verify();
  // })
 
});
