import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Menu } from '../models/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
  providers: [MenuService]
})

export class EditMenuComponent implements OnInit {

  menuId: string;
  menuToUpdate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private menuService: MenuService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.menuId = urlParameters['id'];
    });
    this.menuService.getMenuById(this.menuId).subscribe(dataLastEmittedFromObserver => {
      this.menuToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowMenuPage() {
      this.router.navigate(['menus']);
  }

  updateMenu(menuToUpdate) {
    if (menuToUpdate.menuTheme != "") {
      this.menuService.updateMenu(menuToUpdate);
      this.goToShowMenuPage();
  } else {
    alert('All fields are required!');    
  }
}
