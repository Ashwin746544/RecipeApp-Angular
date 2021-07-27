import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
// import { RecipesComponent } from './recipes/recipes.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipesResolverService } from './recipes/recipes-resolver.service';
// import { AuthComponent } from './auth/auth.component';
// import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes',pathMatch: 'full'},
  // { path: 'recipes', loadChildren: './recipes/recipesmodule#RecipesModule'}, this is not work sometime now
  { path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(m => m.RecipesModule) },
  //  this is modern technique it is also work
  { path: 'shopping-list', loadChildren: ()=> import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: 'recipes', component: RecipesComponent,canActivate: [AuthGuard]
  // ,children:[
  //   {path: "",component: RecipeStartComponent},
  //   {path: "new",component:RecipeEditComponent},
  //   {path: ":id",component: RecipeDetailComponent,resolve:[RecipesResolverService]},
  //   {path: ":id/edit",component: RecipeEditComponent,resolve:[RecipesResolverService]},
  //   // here above we cannot put new path below the :id path because of then angular consider new as a id and it gives error so that we must define new path above :id path
  // ]},
  // { path: 'shopping-list', component: ShoppingListComponent},
  // { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
  // preloadingStrategy: PreloadAllModules using this our app preload all modules so when we navigate to ex. recipes it load recipes page fast
  exports: [RouterModule]
})
export class AppRoutingModule { }
