import { Component, OnInit, ContentChild, AfterContentChecked, AfterContentInit, Host } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { ProductService } from '../product/services/product.service';

@Component({
  selector: 'dnt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [ProductService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(DepartmentComponent) departmentComponent : DepartmentComponent;

  constructor(@Host() private productService: ProductService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.departmentComponent.visible = false;
  }

}
