import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { MenuItemIngredient } from '../models/menuItemIngredient.model';
import { MenuItemIngredientService } from '../menu-item-ingredient.service';

@Component({
  selector: 'app-edit-menuItemIngredient',
  templateUrl: './edit-menu-item-ingredient.component.html',
  styleUrls: ['./edit-menu-item-ingredient.component.css'],
  providers: [MenuItemIngredientService]
})

export class EditMenuItemIngredientComponent implements OnInit {

  menuItemIngredientId: string;
  menuItemIngredientToUpdate;

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
      this.menuItemIngredientToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowMenuItemIngredientPage() {
      this.router.navigate(['menu-item-ingredients']);
  }

  updateMenuItemIngredient(menuItemIngredientToUpdate) {
    this.menuItemIngredientService.updateMenuItemIngredient(menuItemIngredientToUpdate);
    this.goToShowMenuItemIngredientPage();
  }
}
