import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'dnt-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todo: Todo = {
    userId: 0,
    completed: false,
    title: '',
    id: 0
  };

  id$: Observable<number>;

  constructor(private todoService: TodoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id$ = this.route.queryParamMap.pipe(
      tap(data => console.log(data)),
      pluck('params','id')
    )
  }

  addTodo(todoForm: NgForm) {
    if (todoForm.invalid) {
      console.log('form is invaid');
    } else {
      this.todoService.addTodo(this.todo).subscribe((res) => console.log(res));
      todoForm.resetForm();
    }

  }

}
