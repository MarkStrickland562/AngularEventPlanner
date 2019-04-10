import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItemIngredient } from '../models/menuItemIngredient.model';
import { MenuItemIngredientService } from '../menu-item-ingredient.service';

@Component({
  selector: 'app-new-menu-item-ingredient',
  templateUrl: './new-menu-item-ingredient.component.html',
  styleUrls: ['./new-menu-item-ingredient.component.css'],
  providers: [MenuItemIngredientService]
})

export class NewMenuItemIngredientComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private menuItemIngredientService: MenuItemIngredientService) {}

  ngOnInit() {
  }

  goToShowMenuItemIngredientPage() {
      this.router.navigate(['menu-item-ingredients']);
  }

  addMenuItemIngredient(ingredientDescription: string, menuItemsId: number, storeId: number) {
    let newMenuItemIngredient: MenuItemIngredient = new MenuItemIngredient(ingredientDescription, menuItemsId, storeId);
    this.menuItemIngredientService.addMenuItemIngredient(newMenuItemIngredient);
    this.goToShowMenuItemIngredientPage();
  }
}
