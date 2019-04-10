import { Injectable } from '@angular/core';
import { Menu } from './models/menu.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MenuService {
  menuList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.menuList = database.list('menus');
  }

  getMenus() {
    return this.menuList;
  }

  getMenuById(menuId: string) {
    return this.database.object('/menus/' + menuId);
  }

  addMenu(newMenu: Menu) {
    this.menuList.push(newMenu);
  }

  updateMenu(localUpdatedMenu){
    var menuInFirebase = this.getMenuById(localUpdatedMenu.$key);
    menuInFirebase.update({menuTheme: localUpdatedMenu.menuTheme
                         });
  }

  deleteMenu(menuToBeDeleted){
    var menuToDeleteInFirebase = this.getMenuById(menuToBeDeleted.$key);
    menuToDeleteInFirebase.remove();
  }
}
