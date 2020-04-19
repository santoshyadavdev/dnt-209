import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Product } from './models/product';
import { HeaderComponent } from '../header/header.component';
import { ProductService } from './services/product.service';


@Component({
  selector: 'dnt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  @ViewChild('name', {static: true}) nameDiv: ElementRef;

  @ViewChild(HeaderComponent)
  headerComponent: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildren: QueryList<HeaderComponent>;

  products: Product[];
  selectedProduct: Product;

  title = '';

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    // this.headerComponent.title = 'Product';
    this.nameDiv.nativeElement.innerText = 'Test';
  }

  ngAfterViewInit() {
    // this.headerComponent.title = 'Product';
    // this.title = 'Product'
    this.headerChildren.forEach((header: HeaderComponent) =>
      header.title = 'New Product'
    )
  }

  ngAfterViewChecked() {
    // console.log('after view checked is called');
    // if(this.title !== this.headerComponent.title) {
    //   this.headerComponent.title = this.title;
    // }
  }

  receiveFromChild(product: Product) {
    this.selectedProduct = product;
  }

  addProduct() {
    // this.headerComponent.title = "New Component";
    const product: Product = {
      id: 4, name: 'IPhone 11', price: 85000, mfd: new Date('11-Jan-2020')
    };

    // this.products.push(product);
    // this.products = this.products.concat([product]);
    this.products = [...this.products, product];
    this.title = 'New Product';
  }

}
