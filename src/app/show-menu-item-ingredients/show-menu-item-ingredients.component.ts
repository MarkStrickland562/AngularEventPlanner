import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MenuItemIngredient } from '../models/menuItemIngredient.model';
import { MenuItemIngredientService } from '../menu-item-ingredient.service';

@Component({
  selector: 'app-show-menu-item-ingredients',
  templateUrl: './show-menu-item-ingredients.component.html',
  styleUrls: ['./show-menu-item-ingredients.component.css'],
  providers: [MenuItemIngredientService]
})

export class ShowMenuItemIngredientsComponent implements OnInit {

  menuItemIngredientList: FirebaseListObservable<any[]>;
  selectedMenuItemIngredient = null;
  selectedMenuItemIngredientToDelete = null;

  constructor(private router: Router, private menuItemIngredientService: MenuItemIngredientService){}

  ngOnInit() {
    this.menuItemIngredientList = this.menuItemIngredientService.getMenuItemIngredients();
  }

  editMenuItemIngredient(clickedMenuItemIngredient: MenuItemIngredient) {
    this.selectedMenuItemIngredient = clickedMenuItemIngredient;
  }

  finishedEditing() {
    this.selectedMenuItemIngredient = null;
  }

  goToEditMenuItemIngredientPage(clickedMenuItemIngredient) {
    this.router.navigate(['edit-menu-item-ingredient', clickedMenuItemIngredient.$key]);
  }

  goToDeleteMenuItemIngredientPage(clickedMenuItemIngredient) {
    this.router.navigate(['delete-menu-item-ingredient', clickedMenuItemIngredient.$key]);
  }

  goToAddMenuItemIngredientPage() {
    this.router.navigate(['new-menu-item-ingredient']);
  }

  goToSearchMenuItemIngredientPage() {
    this.router.navigate(['search-menu-item-ingredient']);
  }
}
