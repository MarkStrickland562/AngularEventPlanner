import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Store } from '../models/store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-search-store',
  templateUrl: './search-store.component.html',
  styleUrls: ['./search-store.component.css'],
  providers: [StoreService]
})

export class SearchStoreComponent implements OnInit {

  storeList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private storeService: StoreService){}

  ngOnInit() {
    this.storeList = this.storeService.getStores();
  }

  goToEditStorePage(clickedStore) {
    this.router.navigate(['edit-store', clickedStore.$key]);
  }

  goToDeleteStorePage(clickedStore) {
    this.router.navigate(['delete-store', clickedStore.$key]);
  }
}
