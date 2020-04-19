import { Component, OnInit, ContentChild, AfterContentChecked, AfterContentInit } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'dnt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(DepartmentComponent) departmentComponent : DepartmentComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.departmentComponent.visible = false;
  }

}
