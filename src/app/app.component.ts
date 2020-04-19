import { Component, OnInit, DoCheck } from '@angular/core';

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

  ngDoCheck() {
    console.log('Do Check is called');
  }
}
