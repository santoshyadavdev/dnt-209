import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'dnt-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit {

  @HostBinding('class') class ='dnt-employee';

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
