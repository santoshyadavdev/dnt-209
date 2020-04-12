import { Component, OnInit } from '@angular/core';
import { Department } from './department';

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

  departmentList : Array<Department> = [
    {  id: 1,
      name: 'IT',
      count: 200,
      hod: 'Sam'
    },
    {  id: 2,
      name: 'Admin',
      count: 10,
      hod: 'Sam'
    },
    {  id: 3,
      name: 'Finance',
      count: 400,
      hod: 'Sam'
    }
  ]

  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.visible =!this.visible;
  }

}
