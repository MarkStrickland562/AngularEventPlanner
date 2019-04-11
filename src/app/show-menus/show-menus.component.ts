import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Menu } from '../models/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-show-menus',
  templateUrl: './show-menus.component.html',
  styleUrls: ['./show-menus.component.css'],
  providers: [MenuService]
})

export class ShowMenusComponent implements OnInit {

  menuList: FirebaseListObservable<any[]>;
  selectedMenu = null;
  selectedMenuToDelete = null;

  constructor(private router: Router, private MenuService: MenuService){}

  ngOnInit() {
    this.menuList = this.MenuService.getMenus();
  }

  editMenu(clickedMenu: Menu) {
    this.selectedMenu = clickedMenu;
  }

  finishedEditing() {
    this.selectedMenu = null;
  }

  goToEditMenuPage(clickedMenu) {
    this.router.navigate(['edit-menu', clickedMenu.$key]);
  }

  goToDeleteMenuPage(clickedMenu) {
    this.router.navigate(['delete-menu', clickedMenu.$key]);
  }

  goToAddMenuPage() {
    this.router.navigate(['new-menu']);
  }

  goToSearchMenuPage() {
    this.router.navigate(['search-menu']);
  }
}
