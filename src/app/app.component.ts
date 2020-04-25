import { Component, OnInit, DoCheck, SkipSelf, Optional } from '@angular/core';
import { ProductService } from './product/services/product.service';
import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'dnt-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello from Angular</h1>
  //   <h2>Hello world!<h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'dnt209';

  role = 'users';

  constructor(@SkipSelf() private productService: ProductService,
    @Optional() private logger: LoggerService) {
      if(logger) {
        this.logger.log('test')
      }
  }

  addProduct() {
    this.productService.addProduct();
  }



  ngDoCheck() {
    console.log('Do Check is called');
  }
}
