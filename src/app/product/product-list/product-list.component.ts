import {
  Component, OnInit,
  Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges
} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'dnt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() productList: Product[] = [];

  @Input() title = '';

  @Output() selectProduct = new EventEmitter<Product>();

  visible = true;

  price = 0;

  // @Output() selectProduct= new EventEmitter<Product>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  selectedProduct(product: Product) {
    this.selectProduct.emit(product);
  }

  hideProduct() {
    this.visible =!this.visible;
  }

}
