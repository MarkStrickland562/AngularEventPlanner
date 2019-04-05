import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { menuList } from './../mock-data/menu-data';

@Component({
  selector: 'app-show-menus',
  templateUrl: './show-menus.component.html',
  styleUrls: ['./show-menus.component.css']
})

export class ShowMenusComponent  {

  menuList = menuList;

}
