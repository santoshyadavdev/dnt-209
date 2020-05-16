import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private loginService: LoginService,
              private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (childRoute.routeConfig.path === ':id') {
      return true;
    }
    else {
      return this.loginService.isAdmin;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
