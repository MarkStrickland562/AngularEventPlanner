import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Store } from '../models/store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-delete-store',
  templateUrl: './delete-store.component.html',
  styleUrls: ['./delete-store.component.css'],
  providers: [StoreService]
})

export class DeleteStoreComponent implements OnInit {
  storeId: string;
  storeToDelete;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private storeService: StoreService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storeId = urlParameters['id'];
    });
    this.storeService.getStoreById(this.storeId).subscribe(dataLastEmittedFromObserver => {
      this.storeToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowStorePage(){
    this.router.navigate(['stores']);
  }

  onSelect(store: any) {
    if (store.target.value === "true") {
      this.storeService.deleteStore(this.storeToDelete);
    }
    this.goToShowStorePage();
  }
}
