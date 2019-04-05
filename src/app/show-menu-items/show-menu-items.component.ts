import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { menuItemList } from './../mock-data/menuItem-data';

@Component({
  selector: 'app-show-menu-items',
  templateUrl: './show-menu-items.component.html',
  styleUrls: ['./show-menu-items.component.css']
})
export class ShowMenuItemsComponent {

  menuItemList = menuItemList;

}
