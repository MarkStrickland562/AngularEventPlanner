import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MenuItem } from '../models/menuItem.model';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-search-menu-item',
  templateUrl: './search-menu-item.component.html',
  styleUrls: ['./search-menu-item.component.css'],
  providers: [MenuItemService]
})

export class SearchMenuItemComponent implements OnInit {

  menuItemList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private menuItemService: MenuItemService){}

  ngOnInit() {
    this.menuItemList = this.menuItemService.getMenuItems();
  }
}
