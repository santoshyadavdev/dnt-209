import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeOnboardingComponent } from '../employee-onboarding/employee-onboarding.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanDeactivate<unknown> {

  canDeactivate(
    component: EmployeeOnboardingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.onBoardingForm.pristine;
  }

}
