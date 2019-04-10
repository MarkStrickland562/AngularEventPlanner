import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '../models/store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-new-store',
  templateUrl: './new-store.component.html',
  styleUrls: ['./new-store.component.css'],
  providers: [StoreService]
})

export class NewStoreComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private storeService: StoreService) {}

  ngOnInit() {
  }

  goToShowStorePage() {
      this.router.navigate(['stores']);
  }

  addStore(storeName: string) {
    let newStore: Store = new Store(storeName);
    this.storeService.addStore(newStore);
    this.goToShowStorePage();
  }
}
