import { Injectable } from '@angular/core';
import { Department } from './department';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  department: Department[] = [];

  deptSubject = new Subject<Department[]>();

  constructor() { }

  addDepartment(dept: Department) {
    this.department.push(dept);
    this.deptSubject.next(this.department);
  }

  getDepartment() {
    return this.deptSubject.asObservable();
  }
}
