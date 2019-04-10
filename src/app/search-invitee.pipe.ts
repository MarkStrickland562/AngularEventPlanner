import {Pipe, PipeTransform} from '@angular/core';
import {Invitee} from './models/invitee.model';

@Pipe({
  name: "SearchInviteePipe",
  pure: false
})

export class SearchInviteePipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.inviteeName.toLowerCase().includes(searchString))
  }
}
