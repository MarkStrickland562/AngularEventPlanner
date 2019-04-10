import { Injectable } from '@angular/core';
import { MenuItem } from './models/menuItem.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MenuItemService {
  menuItemList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.menuItemList = database.list('menuItems');
  }

  getMenuItems() {
    return this.menuItemList;
  }

  getMenuItemById(menuItemId: string) {
    return this.database.object('/menuItems/' + menuItemId);
  }

  addMenuItem(newMenuItem: MenuItem) {
    this.menuItemList.push(newMenuItem);
  }

  updateMenuItem(localUpdatedMenuItem){
    var menuItemInFirebase = this.getMenuItemById(localUpdatedMenuItem.$key);
    menuItemInFirebase.update({menuItemDescription: localUpdatedMenuItem.menuItemDescription
                            });
  }

  deleteMenuItem(menuItemToBeDeleted){
    var menuItemToDeleteInFirebase = this.getMenuItemById(menuItemToBeDeleted.$key);
    menuItemToDeleteInFirebase.remove();
  }
}
