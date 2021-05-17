import { UserAuthenticationService } from './user-authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogginAuthGuard implements CanActivate {
  constructor(
    private Router: Router,
    private user_auth_serv : UserAuthenticationService
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.user_auth_serv.verifyLogin()){
        this.Router.navigate(['/login'])
        return false;
      }else{
        return true;
      }
  }

}
