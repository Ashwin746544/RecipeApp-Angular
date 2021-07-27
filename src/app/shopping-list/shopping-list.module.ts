// import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoggingService } from "../logging.service";
// import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports:[
    // CommonModule,
    SharedModule, // it include commonModule
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShoppingListComponent},]),
    // here for only one route we do not create file ShoppinglistRouting
  ],
  // providers:[LoggingService]
})
export class ShoppingListModule{
}
