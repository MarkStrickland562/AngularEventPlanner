import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Store } from '../models/store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-show-stores',
  templateUrl: './show-stores.component.html',
  styleUrls: ['./show-stores.component.css'],
  providers: [StoreService]
})

export class ShowStoresComponent implements OnInit {

  storeList: FirebaseListObservable<any[]>;
  selectedStore = null;
  selectedStoreToDelete = null;

  constructor(private router: Router, private storeService: StoreService){}

  ngOnInit() {
    this.storeList = this.storeService.getStores();
  }

  editStore(clickedStore: Store) {
    this.selectedStore = clickedStore;
  }

  finishedEditing() {
    this.selectedStore = null;
  }

  goToEditStorePage(clickedStore) {
    this.router.navigate(['edit-store', clickedStore.$key]);
  }

  goToDeleteStorePage(clickedStore) {
    this.router.navigate(['delete-store', clickedStore.$key]);
  }

  goToAddStorePage() {
    this.router.navigate(['new-store']);
  }
}
