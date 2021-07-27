import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

export class ShoppingListService{

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
 private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

  getIngredients(){
    return this.ingredients.slice(); // this is a copy of the ingredients array,so when we add new Ingredient it added to ingredients array, not to copy of the array, so when we added new ingredient we emit a event with ingredients array
    //  here above if we not return copy of the array then it is working fine without emitting event( ex. return this.ingredients; in getIngredients method)
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }  This approch is good but it emit more events so that can be  affect to performance
    this.ingredients.push(...ingredients); // ...(spread operator) convert array to list
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredient(index:number){
    return this.ingredients[index];
  }
  updateIngredient(index:number,ingredient:Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
  this.ingredients.splice(index,1);
  this.ingredientsChanged.next(this.ingredients.slice());
  }

}
