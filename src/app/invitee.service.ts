import { Injectable } from '@angular/core';
import { Invitee } from './models/invitee.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class InviteeService {
  inviteeList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.inviteeList = database.list('invitees');
  }

  getInvitees() {
    return this.inviteeList;
  }

  getInviteeById(inviteeId: string) {
    return this.database.object('/invitees/' + inviteeId);
  }

  addInvitee(newInvitee: Invitee) {
    this.inviteeList.push(newInvitee);
  }

  updateInvitee(localUpdatedInvitee){
    var inviteeInFirebase = this.getInviteeById(localUpdatedInvitee.$key);
    inviteeInFirebase.update({inviteeName: localUpdatedInvitee.inviteeName,
                              inviteeEmailAddress: localUpdatedInvitee.inviteeEmailAddress
                            });
  }

  deleteInvitee(inviteeToBeDeleted){
    var inviteeToDeleteInFirebase = this.getInviteeById(inviteeToBeDeleted.$key);
    inviteeToDeleteInFirebase.remove();
  }
}
