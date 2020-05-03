import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dnt-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {

  searchText: FormControl;
  age: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.searchText = new FormControl('text');
    this.age = new FormControl('9');
  }

}
