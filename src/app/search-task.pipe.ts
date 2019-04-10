import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './models/task.model';

@Pipe({
  name: "SearchTaskPipe",
  pure: false
})

export class SearchTaskPipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.taskDescription.toLowerCase().includes(searchString))
  }
}
