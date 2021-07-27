import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
 recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService){}

//  recipeSelected = new EventEmitter<Recipe>();
//  private recipes: Recipe[] = [
//     new Recipe(
//       "The Test Recipe",
//       "This is Simply for Test",
//       "https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694__340.jpg",
//       [
//         new Ingredient("French Fries", 20),
//         new Ingredient("Buns", 5),
//       ]
//       ),
//     new Recipe("The another Test Recipe",
//     "This is another Simply for Test",
//     "https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694__340.jpg",
//     [
//       new Ingredient("Bread", 3),
//       new Ingredient("Tomato", 7),
//     ]
//     )
//   ];
 recipes: Recipe[] = [];
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(id: number){
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number,recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
    console.log("after recipe setted slice is: ");
    console.log(this.recipes.slice());
  }
}
