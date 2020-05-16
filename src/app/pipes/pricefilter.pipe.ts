import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/models/product';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(product: Product[], price: number): unknown {
    return product.filter((prod) => prod.price > price);
  }

}
