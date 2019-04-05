import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store.model';
import { storeList } from './../mock-data/store-data';

@Component({
  selector: 'app-show-stores',
  templateUrl: './show-stores.component.html',
  styleUrls: ['./show-stores.component.css']
})

export class ShowStoresComponent  {

  storeList = storeList;

}
