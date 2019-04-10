import { Injectable } from '@angular/core';
import { MenuItemIngredient } from './models/menuItemIngredient.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MenuItemIngredientService {
  menuItemIngredientList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.menuItemIngredientList = database.list('menuItemIngredients');
  }

  getMenuItemIngredients() {
    return this.menuItemIngredientList;
  }

  getMenuItemIngredientById(menuItemIngredientId: string) {
    return this.database.object('/menuItemIngredients/' + menuItemIngredientId);
  }

  addMenuItemIngredient(newMenuItemIngredient: MenuItemIngredient) {
    this.menuItemIngredientList.push(newMenuItemIngredient);
  }

  updateMenuItemIngredient(localUpdatedMenuItemIngredient){
    var menuItemIngredientInFirebase = this.getMenuItemIngredientById(localUpdatedMenuItemIngredient.$key);
    menuItemIngredientInFirebase.update({ingredientDescription: localUpdatedMenuItemIngredient.ingredientDescription,
                                         menuItemsId: localUpdatedMenuItemIngredient.menuItemsId,
                                         storeId: localUpdatedMenuItemIngredient.storeId
                                       });
  }

  deleteMenuItemIngredient(menuItemIngredientToBeDeleted){
    var menuItemIngredientToDeleteInFirebase = this.getMenuItemIngredientById(menuItemIngredientToBeDeleted.$key);
    menuItemIngredientToDeleteInFirebase.remove();
  }
}
