import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(data) {
    console.log(data)
  }
}
