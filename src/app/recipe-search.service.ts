import { recipeKey } from './api-keys';
import { recipeID } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeSearchService {

  constructor(private http: Http) { }

  getRecipes(searchString: string, searchCount: number) {
    return this.http.get(`https://api.edamam.com/search?q=${searchString}&to=${searchCount}&app_id=${recipeID}&app_key=${recipeKey}`)
  }
}
