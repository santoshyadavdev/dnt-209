import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/services/login.service';
import { APP_CONFIG, APP_VALUE } from '../valueProvider/config.service';
import { Config } from '../valueProvider/config';
import { TodoService } from './services/todo.service';

export const todofactory = (http: HttpClient, loginService: LoginService,
                            appConfig: Config) => {
  return new TodoService(http, loginService.isLoggedIn, APP_VALUE);
};

export const todoProvider = {
  provide: TodoService,
  useFactory: todofactory,
  deps: [HttpClient, LoginService, APP_CONFIG]
};
