import { Component, OnInit } from '@angular/core';
import { MenuItemIngredient } from '../models/menuItemIngredient.model';
import { menuItemIngredientList } from './../mock-data/menuItemIngredients-data';


@Component({
  selector: 'app-show-menu-item-ingredients',
  templateUrl: './show-menu-item-ingredients.component.html',
  styleUrls: ['./show-menu-item-ingredients.component.css']
})

export class ShowMenuItemIngredientsComponent  {

  menuItemIngredientList = menuItemIngredientList;

}
