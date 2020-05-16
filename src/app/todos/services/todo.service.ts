import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo';
import { APP_CONFIG } from '../../valueProvider/config.service';
import { Config } from '../../valueProvider/config';


// @Injectable({
//   providedIn: 'root'
// })
export class TodoService {

  constructor(private http: HttpClient,
              private isLoggedn: boolean,
              @Inject(APP_CONFIG) private appConfig: Config) {
    console.log(appConfig.jsonPlaceHolderApi);
    console.log(`login ${isLoggedn}`);
  }

  getTodos() {
    const header = new HttpHeaders().set('X-ACCESS-TOKEN', 'sfsdgfhsdgufiyiu');
    return this.http.get<Todo[]>(`${this.appConfig.jsonPlaceHolderApi}/todos`, {
      headers: header
    });
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(`${this.appConfig.jsonPlaceHolderApi}/todos`, todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`${this.appConfig.jsonPlaceHolderApi}/todos/${todo.id}`, todo);
  }

  getPhotos() {
    const request = new HttpRequest('GET', `${this.appConfig.jsonPlaceHolderApi}/photos`, {
      reportProgress: true
    });

    return this.http.request(request);
  }
}
