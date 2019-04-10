import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Menu } from '../models/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.css'],
  providers: [MenuService]
})

export class DeleteMenuComponent implements OnInit {
  menuId: string;
  menuToDelete;

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
      this.menuToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowMenuPage(){
    this.router.navigate(['menus']);
  }

  onSelect(menu: any) {
    if (menu.target.value === "true") {
      this.menuService.deleteMenu(this.menuToDelete);
    }
    this.goToShowMenuPage();
  }
}
