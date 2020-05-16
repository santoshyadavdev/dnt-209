import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(userRole: string): unknown {
    return `Welcome ${userRole}`;
  }

}
