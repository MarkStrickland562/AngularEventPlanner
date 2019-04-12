import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Invitee } from '../models/invitee.model';
import { InviteeService } from '../invitee.service';

@Component({
  selector: 'app-new-invitee',
  templateUrl: './new-invitee.component.html',
  styleUrls: ['./new-invitee.component.css'],
  providers: [InviteeService]
})

export class NewInviteeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private inviteeService: InviteeService) {}

  ngOnInit() {
  }

  goToShowInviteePage() {
      this.router.navigate(['invitees']);
  }

  addInvitee(inviteeName: string, inviteeEmailAddress: string) {
    if (inviteeName != null && inviteeEmailAddress != null) {
      let newInvitee: Invitee = new Invitee(inviteeName, inviteeEmailAddress);
      this.inviteeService.addInvitee(newInvitee);
      this.goToShowInviteePage();
  } else {
    alert('All fields are required!');
  }
}
