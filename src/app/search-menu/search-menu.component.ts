import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Menu } from '../models/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css'],
  providers: [MenuService]
})

export class SearchMenuComponent implements OnInit {

  menuList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private menuService: MenuService){}

  ngOnInit() {
    this.menuList = this.menuService.getMenus();
  }

  goToEditMenuPage(clickedMenu) {
    this.router.navigate(['edit-menu', clickedMenu.$key]);
  }

  goToDeleteMenuPage(clickedMenu) {
    this.router.navigate(['delete-menu', clickedMenu.$key]);
  }
}
