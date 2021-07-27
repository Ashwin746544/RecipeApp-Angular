import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  itemToEdit: Ingredient;
  @ViewChild('f') slForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }
  onSubmit(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
     const ingName = form.value.name;
     const ingAmount= form.value.amount;
    const newingredient = new Ingredient(ingName,ingAmount);
    if(this.editMode){
   this.shoppingListService.updateIngredient(this.editItemIndex,newingredient)
    }else{
      this.shoppingListService.addIngredient(newingredient);
    }
    this.editMode =false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
 onDelete(){
   this.shoppingListService.deleteIngredient(this.editItemIndex);
   this.onClear();
 }
  ngOnInit(): void {
   this.subscription = this.shoppingListService.startedEditing.subscribe(
     (index: number) =>{
       this.editMode = true;
       this.editItemIndex = index;
       this.itemToEdit = this.shoppingListService.getIngredient(index);
       this.slForm.setValue({
         'name': this.itemToEdit.name,
         'amount': this.itemToEdit.amount
       });
     }
   );
  }
}
