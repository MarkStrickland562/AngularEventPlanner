import {Pipe, PipeTransform} from '@angular/core';
import {Menu} from './models/menu.model';

@Pipe({
  name: "SearchMenuPipe",
  pure: false
})

export class SearchMenuPipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.menuTheme.toLowerCase().includes(searchString))
  }
}
