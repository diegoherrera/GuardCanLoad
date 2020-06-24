import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment
  , ActivatedRouteSnapshot, RouterStateSnapshot
  , UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CargarmodulosGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(route: Route): boolean {

    console.log('ingreso al guardian carga de modulo');
    let url: string = route.path;
    console.log('Url:' + url);
    if (localStorage.getItem('condiciondeestado') == 'true') {
      
      return true;
    }
    //podria direccionar a donde quiera 
    this.router.navigate(['/modulenofound']);
    return false;
  }

}