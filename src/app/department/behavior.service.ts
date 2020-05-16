import { Injectable } from '@angular/core';
import { Department } from './department';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  department: Department[] = [];

  deptSubject = new BehaviorSubject<Department[]>([]);

  constructor() { }

  addDepartment(dept: Department) {
    this.department.push(dept);
    this.deptSubject.next(this.department);
  }

  getDepartment() {
    return this.deptSubject.asObservable();
  }
}
