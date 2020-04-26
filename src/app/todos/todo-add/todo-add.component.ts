import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { NgForm } from '@angular/forms';

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

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
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
