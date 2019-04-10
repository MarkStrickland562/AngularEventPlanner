import {Pipe, PipeTransform} from '@angular/core';
import {Store} from './models/store.model';

@Pipe({
  name: "SearchStorePipe",
  pure: false
})

export class SearchStorePipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.storeName.toLowerCase().includes(searchString))
  }
}
