import {Pipe, PipeTransform} from '@angular/core';
import {MenuItemIngredient} from './models/menuItemIngredient.model';

@Pipe({
  name: "SearchMenuItemIngredientPipe",
  pure: false
})

export class SearchMenuItemIngredientPipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.ingredientDescription.toLowerCase().includes(searchString))
  }
}
