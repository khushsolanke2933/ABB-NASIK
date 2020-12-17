import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.jwtToken) {
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
