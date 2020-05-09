import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'dnt-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  id$: Observable<number>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id$ = this.route.paramMap.pipe(
      pluck('params', 'id'),
    );

    // this.route.paramMap.subscribe(data => console.log(data.get('id')));

  }

}
