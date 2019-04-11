import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Invitee } from '../models/invitee.model';
import { InviteeService } from '../invitee.service';

@Component({
  selector: 'app-search-invitee',
  templateUrl: './search-invitee.component.html',
  styleUrls: ['./search-invitee.component.css'],
  providers: [InviteeService]
})

export class SearchInviteeComponent implements OnInit {

  inviteeList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private inviteeService: InviteeService){}

  ngOnInit() {
    this.inviteeList = this.inviteeService.getInvitees();
  }
}
