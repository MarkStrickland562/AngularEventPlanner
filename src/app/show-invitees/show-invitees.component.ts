import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Invitee } from '../models/invitee.model';
import { InviteeService } from '../invitee.service';

@Component({
  selector: 'app-show-invitees',
  templateUrl: './show-invitees.component.html',
  styleUrls: ['./show-invitees.component.css'],
  providers: [InviteeService]
})

export class ShowInviteesComponent implements OnInit {

  inviteeList: FirebaseListObservable<any[]>;
  selectedInvitee = null;
  selectedInviteeToDelete = null;

  constructor(private router: Router, private inviteeService: InviteeService){}

  ngOnInit() {
    this.inviteeList = this.inviteeService.getInvitees();
  }

  editInvitee(clickedInvitee: Invitee) {
    this.selectedInvitee = clickedInvitee;
  }

  finishedEditing() {
    this.selectedInvitee = null;
  }

  goToEditInviteePage(clickedInvitee) {
    this.router.navigate(['edit-invitee', clickedInvitee.$key]);
  }

  goToDeleteInviteePage(clickedInvitee) {
    this.router.navigate(['delete-invitee', clickedInvitee.$key]);
  }

  goToAddInviteePage() {
    this.router.navigate(['new-invitee']);
  }
}
