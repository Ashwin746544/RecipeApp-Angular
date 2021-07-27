import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector:'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{
  constructor(private authService: AuthService,private router: Router,private componentFactoryResolver: ComponentFactoryResolver){}
  @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective;
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  closeSub: Subscription;
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
   resObs: Observable<AuthResponseData>;
  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    if(!form.valid){
      return;
    }
    this.isLoading = true;
    if(this.isLoginMode){
      this.resObs = this.authService.login(email,password);
    }else{
     this.resObs = this.authService.signUp(email,password);
    }
    this.resObs.subscribe(
      resData => {
        this.router.navigate(['/recipes']);
        this.isLoading = false;
        console.log(resData);
      },errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
        this.showAlertComponent(errorMessage);
        console.log(errorMessage);
      }
    );
    form.reset();
  }
  onHandleAlert(){
    this.error = null;
  }
  ngOnDestroy(){
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
  private showAlertComponent(message: string){
   const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
   const hostViewContainerRef = this.alertHost.viewcontainerRef;
   hostViewContainerRef.clear();
   const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
   this.closeSub = componentRef.instance.close.subscribe(
     () => {
     this.closeSub.unsubscribe();
     hostViewContainerRef.clear();
     }
   );
  }
}






