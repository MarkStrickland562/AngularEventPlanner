import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeSearchService {

  constructor(private http: Http) { }

  searchRecipes(searchString: string) {
    return this.http.get(`https://api.edamam.com/search?q=chicken&app_id=${process.env.appId}&app_key=${process.env.apiKey}`)
  }
}
