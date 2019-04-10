import {Pipe, PipeTransform} from '@angular/core';
import {MenuItem} from './models/menuItem.model';

@Pipe({
  name: "SearchMenuItemPipe",
  pure: false
})

export class SearchMenuItemPipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.menuItemDescription.toLowerCase().includes(searchString))
  }
}
