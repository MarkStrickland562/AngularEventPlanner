import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { MenuItemIngredient } from '../models/menuItemIngredient.model';
import { MenuItemIngredientService } from '../menu-item-ingredient.service';

@Component({
  selector: 'app-delete-menu-item-ingredient',
  templateUrl: './delete-menu-item-ingredient.component.html',
  styleUrls: ['./delete-menu-item-ingredient.component.css'],
  providers: [MenuItemIngredientService]
})

export class DeleteMenuItemIngredientComponent implements OnInit {
  menuItemIngredientId: string;
  menuItemIngredientToDelete;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private menuItemIngredientService: MenuItemIngredientService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.menuItemIngredientId = urlParameters['id'];
    });
    this.menuItemIngredientService.getMenuItemIngredientById(this.menuItemIngredientId).subscribe(dataLastEmittedFromObserver => {
      this.menuItemIngredientToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowMenuItemIngredientPage(){
    this.router.navigate(['menu-item-ingredients']);
  }

  onSelect(menuItemIngredient: any) {
    if (menuItemIngredient.target.value === "true") {
      this.menuItemIngredientService.deleteMenuItemIngredient(this.menuItemIngredientToDelete);
    }
    this.goToShowMenuItemIngredientPage();
  }
}
