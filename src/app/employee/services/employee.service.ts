import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getOnboardingData() {
    return of({
      name: 'Employee 1',
      email: 'emp1@test.com',
      dob: new Date('10-Feb-2001'),
      pastExp: [
        {
          orgName: 'abc',
          fromDate: new Date('1-jan-2009'),
          toDate: new Date('1-jan-2015'),
          role: 'admin'
        }
      ]
    });
  }
}
