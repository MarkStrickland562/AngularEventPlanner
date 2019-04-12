import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Menu } from '../models/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css'],
  providers: [MenuService]
})

export class NewMenuComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private menuService: MenuService) {}

  ngOnInit() {
  }

  goToShowMenuPage() {
      this.router.navigate(['menus']);
  }

  addMenu(menuTheme: string) {
    if (menuTheme != "") {
      let newMenu: Menu = new Menu(menuTheme);
      this.menuService.addMenu(newMenu);
      this.goToShowMenuPage();
    } else {
      alert('All fields are required!');
    }
  }
}
