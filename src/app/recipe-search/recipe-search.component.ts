import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeSearchService } from '../recipe-search.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
  providers: [ RecipeSearchService ]
})

export class RecipeSearchComponent {
  recipes: any[];

  constructor(private router: Router, private recipeSearchService: RecipeSearchService) { }

  searchRecipes(searchString: string, searchCount: number) {
    this.recipes = null;
    this.recipeSearchService.getRecipes(searchString, searchCount).subscribe(response => {
      this.recipes = response.json();
    });
  }

  goToRecipeSearchPage(clickedEvent) {
    location.reload();
  }

}
