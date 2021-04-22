import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DemoGuard implements CanActivate {

  canActivate( route: ActivatedRouteSnapshot ): boolean {
    return route.params["nbr"] % 2 === 0;
  }
  
}
