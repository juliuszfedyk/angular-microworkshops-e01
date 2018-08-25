import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HoundGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
  
      if (this.authService.canAccessHounds()) {
        return true;
      }
  
      this.router.navigate(['/403']);
      return false;
  }
}
