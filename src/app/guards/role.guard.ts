import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { getAllowedRouterLinks } from '../modules/sidebar/role-access';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const userRole = localStorage.getItem('userRole');
    const allowedLinks = getAllowedRouterLinks(userRole);
    const routerLink = route.routeConfig?.path;

    if (routerLink && allowedLinks.includes(routerLink)) {
      return true;
    }

    return this.router.createUrlTree(['/menu']);
  }
}
