import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RecipeService } from './recipes/recipe.service';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HttpClientModule } from '@angular/common/http'
// import { AuthComponent } from './auth/auth.component';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
// import { AlertComponent } from './shared/alert/alert.component';
// import { PlaceHolderDirective } from './shared/placeholder/placeholder.directive';
// import { RecipesModule } from './recipes/recipes.module';
// import { RecipesRoutingModule } from './recipes/recipes-routing.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
// import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RecipesComponent,
    // RecipeDetailComponent,
    // RecipeListComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // RecipeItemComponent,
    // DropdownDirective,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // AuthComponent,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RecipesRoutingModule,
    HttpClientModule,
    // RecipesModule, because now we loading Recipesmodule lazily
    // ShoppingListModule,because now we loading Recipesmodule lazily
    SharedModule,
    CoreModule
    // AuthModule, because now we loading Recipesmodule lazily
  ],
  // providers: [ShoppingListService,RecipeService,{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent],
  // providers:[LoggingService]
})
export class AppModule { }
