import { CommonModule } from "@angular/common";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import { NgModule } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";

@NgModule({
  declarations:[
  AlertComponent,
  LoadingSpinnerComponent,
  PlaceHolderDirective,
  DropdownDirective
  ],
  imports:[
  CommonModule
  ],
  exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule
  ],
  providers:[LoggingService]
})
export class SharedModule{

}
