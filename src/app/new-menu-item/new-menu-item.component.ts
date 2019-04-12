import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItem } from '../models/menuItem.model';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-new-menu-item',
  templateUrl: './new-menu-item.component.html',
  styleUrls: ['./new-menu-item.component.css'],
  providers: [MenuItemService]
})

export class NewMenuItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private menuItemService: MenuItemService) {}

  ngOnInit() {
  }

  goToShowMenuItemPage() {
      this.router.navigate(['menu-items']);
  }

  addMenuItem(menuItemDescription: string) {
    if (menuItemDescription != null) {
      let newMenuItem: MenuItem = new MenuItem(menuItemDescription);
      this.menuItemService.addMenuItem(newMenuItem);
      this.goToShowMenuItemPage();
  } else {
    alert('All fields are required!');    
  }
}
