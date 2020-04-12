import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dnt-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name = 'Sam';

  age = 25;

  visible = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.visible = !this.visible;
  }

  changeName(name: string) {
    this.name = name;
  }

}
