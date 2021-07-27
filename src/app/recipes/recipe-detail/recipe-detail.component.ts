import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;
  constructor(private recipeService: RecipeService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );

  }
  onAddedToShoppingList(ingredients: Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
   }
   onDeleteRecipe(){
     this.recipeService.deleteRecipe(this.id);
    //  this.router.navigate(['../'],{relativeTo: this.route}); // can also do this
     this.router.navigate(['/recipes']);
   }
}
