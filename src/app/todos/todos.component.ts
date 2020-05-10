import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'dnt-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  // todoList: Todo[] = [];
  todo$: Observable<Todo[]>;
  subscription: Subscription;
  constructor(private todoService: TodoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todo$ = this.route.data.pipe(
      pluck('todoList')
    )
    // this.todo$ = this.todoService.getTodos();
    // this.subscription = this.todoService.getTodos().subscribe(res => this.todoList = res);
  }

  addTodo() {
    const todo: Todo = {
      title: 'Test',
      completed: true,
      userId: 2
    };

    this.todoService.addTodo(todo).subscribe(res => console.log(res));
  }

  updateTodo() {
    const todo: Todo = {
      title: 'Test',
      completed: true,
      userId: 2,
      id: 1
    };

    this.todoService.updateTodo(todo).subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    // if(this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

}
