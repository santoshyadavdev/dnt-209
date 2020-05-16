import { Component, OnInit } from '@angular/core';
import { Department } from './department';
import { DepartmentService } from './department.service';
import { Observable } from 'rxjs';
import { BehaviorService } from './behavior.service';

@Component({
  selector: 'dnt-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: Department = {
    id: 1,
    name: 'IT',
    count: 200,
    hod: 'Sam'
  };

  departmentList$: Observable<Array<Department>>;

  visible = true;

  constructor(private deptService: BehaviorService) { }

  ngOnInit(): void {
    this.departmentList$ = this.deptService.getDepartment();
  }

  showDetails() {
    this.visible = !this.visible;
  }

  trackByFn(i: number, data: Department) {
    return data.id;
  }

  addDepartment() {
    this.deptService.addDepartment({
      id: 2,
      name: 'marketing',
      count: 200,
      hod: 'Sam'
    });
  }

}
