import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos',todo);
  }

  updateTodo(todo: Todo){
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo);
  }
}
