import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  prodList: Product[] = [];

  constructor() { }

  getProducts() {
    return this.prodList = [
      { id: 1, name: 'One Plus 8', mfd: new Date('11-Apr-2020'), price: 65000 },
      { id: 2, name: 'Blue Microphone', mfd: new Date('11-Mar-2020'), price: 12000 },
      { id: 3, name: 'One Plus 8 Pro', mfd: new Date('11-Apr-2019'), price: 85000 },
    ];
  }
}
