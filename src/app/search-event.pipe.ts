import {Pipe, PipeTransform} from '@angular/core';
import {Event} from './models/event.model';

@Pipe({
  name: "SearchEventPipe",
  pure: false
})

export class SearchEventPipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.eventName.toLowerCase().includes(searchString))
  }
}
