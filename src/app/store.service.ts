import { Injectable } from '@angular/core';
import { Store } from './models/store.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StoreService {
  storeList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.storeList = database.list('stores');
  }

  getStores() {
    return this.storeList;
  }

  getStoreById(storeId: string) {
    return this.database.object('/stores/' + storeId);
  }

  addStore(newStore: Store) {
    this.storeList.push(newStore);
  }

  updateStore(localUpdatedStore){
    var storeInFirebase = this.getStoreById(localUpdatedStore.$key);
    storeInFirebase.update({storeName: localUpdatedStore.storeName
                          });
  }

  deleteStore(storeToBeDeleted){
    var storeToDeleteInFirebase = this.getStoreById(storeToBeDeleted.$key);
    storeToDeleteInFirebase.remove();
  }
}
