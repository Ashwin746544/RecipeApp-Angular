import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' }) // HttpClient is a service so we always need to write @injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    console.log("firebase update code successfully");
    const recipes = this.recipeService.getRecipes();
    console.log("In store Recipes: ");
    console.log(recipes);
    this.http.put('https://recipebook-ab505-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
      Response => {
        console.log(Response);
      }
    );
    // here we used PUT reqest to store more than one recipe(array of recipe) and each time this request overwrite the data in firebase
  }
  fetchRecipes() {
    console.log("ftech recipe called");
    console.log("firebase update code successfully");
    // here take(1) means we want to get 1 value(user.token) and after getting 1 value from user observable we return the observable return by get<>() so for this we used exhaustMap without using it we cannot return observable inside observable
    // this.authService.user.pipe(take(1),exhaustMap(
    // user => {
    //   return this.http.get<Recipe[]>('https:recipebook-ab505-default-rtdb.firebaseio.com/recipes.json', {
    //     params: new HttpParams().set('auth', user.token)
    //   }
    //   )
    // }),              //this implementation for all request we added in AuthInterceptorService
    //  map(
    // (recipes: Recipe[]) => {
    //     return recipes.map(
    //       (recipe) => {
    //         return {
    //           ...recipe,
    //           ingredients: recipe.ingredients ? recipe.ingredients : []
    //         };
    //       } // this map method is method of js object not a angular operator
    //     )
    //   }
    // ), tap(
    //   recipes => {
    //     this.recipeService.setRecipes(recipes);
    //   }
    // )
    // );
     return this.http.get<Recipe[]>('https:recipebook-ab505-default-rtdb.firebaseio.com/recipes.json',{
       responseType: 'json'
     }).pipe(map(
        recipes => {
          console.log("json response: ");
          console.log(recipes);
         return recipes.map(
            (recipe) => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []};
          } // this map method is method of js object not a angular operator
          //here we add empty ingredient array but firebase does not store empty array
          )
        }
      ),tap(
        recipes => {
          this.recipeService.setRecipes(recipes);
        }
      ));
  }
}
