import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MenuItemIngredient } from '../models/menuItemIngredient.model';
import { MenuItemIngredientService } from '../menu-item-ingredient.service';

@Component({
  selector: 'app-search-menu-itemi-ngredient',
  templateUrl: './search-menu-item-ingredient.component.html',
  styleUrls: ['./search-menu-item-ingredient.component.css'],
  providers: [MenuItemIngredientService]
})

export class SearchMenuItemIngredientComponent implements OnInit {

  menuItemIngredientList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private menuItemIngredientService: MenuItemIngredientService){}

  ngOnInit() {
    this.menuItemIngredientList = this.menuItemIngredientService.getMenuItemIngredients();
  }

  goToEditMenuItemIngredientPage(clickedMenuItemIngredient) {
    this.router.navigate(['edit-menu-item-ingredient', clickedMenuItemIngredient.$key]);
  }

  goToDeleteMenuItemIngredientPage(clickedMenuItemIngredient) {
    this.router.navigate(['delete-menu-item-ingredient', clickedMenuItemIngredient.$key]);
  }
}
