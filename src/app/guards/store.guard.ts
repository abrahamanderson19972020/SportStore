import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductComponent } from '../store/product/product.component';

@Injectable()
export class StoreGuard implements CanActivate {
  private firstNavigation: boolean = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation === true) {
      this.firstNavigation = false;
      if (route.component !== ProductComponent) {
        this.router.navigateByUrl('/store');
        return false;
      }
    }
    return true;
  }
}
