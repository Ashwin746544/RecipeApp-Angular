import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  constructor(private authSrvice: AuthService,private router: Router){}
  canActivate(route: ActivatedRouteSnapshot,routerState: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
   return this.authSrvice.user.pipe(
    take(1), // take value first time and then automatically unsubscrib and not listening contineously
    map(
     user => {
      //  const isAuth = !user? false: true; // also right
       const isAuth = !!user;
       if(isAuth){
         return true;
       }
       return this.router.createUrlTree(['/auth']);
     }
   )
  //  ,tap(
  //    isAuth =>{
  //      if(!isAuth){
  //        this.router.navigate(['/auth']); // also do this if we don't want to return UrlTree for redirecting to auth
  //      }
  //    }
  //  )
   );
  }
}
