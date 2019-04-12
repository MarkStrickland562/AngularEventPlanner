import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { MenuItem } from '../models/menuItem.model';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-edit-menu-item',
  templateUrl: './edit-menu-item.component.html',
  styleUrls: ['./edit-menu-item.component.css'],
  providers: [MenuItemService]
})

export class EditMenuItemComponent implements OnInit {

  menuItemId: string;
  menuItemToUpdate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private menuItemService: MenuItemService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.menuItemId = urlParameters['id'];
    });
    this.menuItemService.getMenuItemById(this.menuItemId).subscribe(dataLastEmittedFromObserver => {
      this.menuItemToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowMenuItemPage() {
      this.router.navigate(['menu-items']);
  }

  updateMenuItem(menuItemToUpdate) {
    if (menuItemToUpdate.description != "") {
      this.menuItemService.updateMenuItem(menuItemToUpdate);
      this.goToShowMenuItemPage();
    } else {
      alert('All fields are required!');
    }
  }
}
