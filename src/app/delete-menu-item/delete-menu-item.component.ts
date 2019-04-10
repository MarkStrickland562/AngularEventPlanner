import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { MenuItem } from '../models/menuItem.model';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-delete-menu-Item',
  templateUrl: './delete-menu-Item.component.html',
  styleUrls: ['./delete-menu-Item.component.css'],
  providers: [MenuItemService]
})

export class DeleteMenuItemComponent implements OnInit {
  menuItemId: string;
  menuItemToDelete;

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
      this.menuItemToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowMenuItemPage(){
    this.router.navigate(['menu-items']);
  }

  onSelect(menuItem: any) {
    if (menuItem.target.value === "true") {
      this.menuItemService.deleteMenuItem(this.menuItemToDelete);
    }
    this.goToShowMenuItemPage();
  }
}
