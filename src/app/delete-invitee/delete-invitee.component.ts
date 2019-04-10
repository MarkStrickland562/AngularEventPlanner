import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Invitee } from '../models/invitee.model';
import { InviteeService } from '../invitee.service';

@Component({
  selector: 'app-delete-invitee',
  templateUrl: './delete-invitee.component.html',
  styleUrls: ['./delete-invitee.component.css'],
  providers: [InviteeService]
})

export class DeleteInviteeComponent implements OnInit {
  inviteeId: string;
  inviteeToDelete;

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
      this.inviteeToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowInviteePage(){
    this.router.navigate(['invitees']);
  }

  onSelect(invitee: any) {
    if (invitee.target.value === "true") {
      this.inviteeService.deleteInvitee(this.inviteeToDelete);
    }
    this.goToShowInviteePage();
  }
}
