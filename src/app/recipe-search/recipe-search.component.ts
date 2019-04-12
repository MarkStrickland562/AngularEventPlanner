import { Component, Input } from '@angular/core';
import { RecipeSearchService } from '../recipe-search.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
  providers: [ RecipeSearchService ]
})

export class RecipeSearchComponent {
  recipes: any[];

  constructor(private recipeSearchService: RecipeSearchService) { }

  searchRecipes(searchString: string) {
    this.recipes = null;
    this.recipeSearchService.getRecipes(searchString).subscribe(response => {
      this.recipes = response.json();
      console.log(this.recipes);
    });
  }
}
