import { Component, OnInit,
   Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'dnt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[] = [];

  @Output() selectProduct= new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct(product: Product) {
    this.selectProduct.emit(product);
  }

}
