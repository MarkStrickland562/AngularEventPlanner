import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Invitee } from '../models/invitee.model';
import { InviteeService } from '../invitee.service';

@Component({
  selector: 'app-edit-invitee',
  templateUrl: './edit-invitee.component.html',
  styleUrls: ['./edit-invitee.component.css'],
  providers: [InviteeService]
})

export class EditInviteeComponent implements OnInit {

  inviteeId: string;
  inviteeToUpdate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private inviteeService: InviteeService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.inviteeId = urlParameters['id'];
    });
    this.inviteeService.getInviteeById(this.inviteeId).subscribe(dataLastEmittedFromObserver => {
      this.inviteeToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowInviteePage() {
      this.router.navigate(['invitees']);
  }

  updateInvitee(inviteeToUpdate) {
    if (inviteeToUpdate.inviteeName != "" && inviteeToUpdate.inviteeEmailAddress != "") {
      this.inviteeService.updateInvitee(inviteeToUpdate);
      this.goToShowInviteePage();
  } else {
    alert('All fields are required!');
  }
}
