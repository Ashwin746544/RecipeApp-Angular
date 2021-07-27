import { Component, Output,EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component(
    {
        selector:"app-header",
        templateUrl:"./header.component.html"
    }
)
export class HeaderComponent implements OnInit,OnDestroy{
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }
  isAuthenticated = false;
  userSub: Subscription;
  constructor(private dataStorageService: DataStorageService,private authService: AuthService) {}
  ngOnInit(){
   this.userSub = this.authService.user.subscribe(
      user => {
          this.isAuthenticated = !user ? false : true;
          // this.isAuthenticated = !!user; // also same as above
      }
    );
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe(
      (responseData)=>{
        console.log("fetch data is: ");
        console.log(responseData);
      },(e)=>{
        console.log("error is:");
        console.log(e);
        console.log(e.message);
      }
    );
  }
  onLogout(){
    this.authService.logout();
  }

}
