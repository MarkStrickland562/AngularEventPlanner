import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Store } from '../models/store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css'],
  providers: [StoreService]
})

export class EditStoreComponent implements OnInit {

  storeId: string;
  storeToUpdate;

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
      this.storeToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowStorePage() {
      this.router.navigate(['stores']);
  }

  updateStore(storeToUpdate) {
    if (storeToUpdate.storeName != "") {
      this.storeService.updateStore(storeToUpdate);
      this.goToShowStorePage();
  } else {
    alert('All fields are required!');
  }
}
