// import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
// import { DropdownDirective } from "../shared/dropdown.directive";
import { SharedModule } from "../shared/shared.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule(
  {
    declarations:[
      RecipesComponent,
      RecipeDetailComponent,
      RecipeListComponent,
      RecipeItemComponent,
      RecipeStartComponent,
      RecipeEditComponent,
    ],
    imports:[
      RouterModule,
      // CommonModule,
      SharedModule, // it include commonModule
      ReactiveFormsModule,
      RecipesRoutingModule
    ],
    // exports:[
    //   RecipesComponent,
    //   RecipeDetailComponent,
    //   RecipeListComponent,
    //   RecipeItemComponent,
    //   RecipeStartComponent,
    //   RecipeEditComponent
    // ]
  }
)
export class RecipesModule{

}
// here for this error "NG0303: Can't bind to 'ngForOf' since it isn't a known property of 'app-recipe-item'"  we have to import browserModule but we can import browsermodule once in angular application which we imported in AppModule,so here we import CommonModule which also provide NgForof and ngIf functionality

// for this error NG8002: Can't bind to
// 'formGroupName' since it isn't a known property of 'div'. we have to import reactiveformModule

// for this error NG8001: 'router-outlet' is not a known element:
// we import RouterModule
