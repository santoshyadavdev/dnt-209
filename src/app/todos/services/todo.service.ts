import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    const header = new HttpHeaders().set('X-ACCESS-TOKEN', 'sfsdgfhsdgufiyiu');
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      headers: header
    });
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true
    });

    return this.http.request(request);
  }
}
