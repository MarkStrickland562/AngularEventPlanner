import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MenuItem } from '../models/menuItem.model';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-show-menu-items',
  templateUrl: './show-menu-items.component.html',
  styleUrls: ['./show-menu-items.component.css'],
  providers: [MenuItemService]
})

export class ShowMenuItemsComponent implements OnInit {

  menuItemList: FirebaseListObservable<any[]>;
  selectedMenuItem = null;
  selectedMenuItemToDelete = null;

  constructor(private router: Router, private menuItemService: MenuItemService){}

  ngOnInit() {
    this.menuItemList = this.menuItemService.getMenuItems();
  }

  editMenuItem(clickedMenuItem: MenuItem) {
    this.selectedMenuItem = clickedMenuItem;
  }

  finishedEditing() {
    this.selectedMenuItem = null;
  }

  goToEditMenuItemPage(clickedMenuItem) {
    this.router.navigate(['edit-menu-item', clickedMenuItem.$key]);
  }

  goToDeleteMenuItemPage(clickedMenuItem) {
    this.router.navigate(['delete-menu-item', clickedMenuItem.$key]);
  }

  goToAddMenuItemPage() {
    this.router.navigate(['new-menu-item']);
  }
}
