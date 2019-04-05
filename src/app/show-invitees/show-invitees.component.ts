import { Component, OnInit } from '@angular/core';
import { Invitee } from '../models/invitee.model';
import { inviteeList } from './../mock-data/invitee-data';

@Component({
  selector: 'app-show-invitees',
  templateUrl: './show-invitees.component.html',
  styleUrls: ['./show-invitees.component.css']
})
export class ShowInviteesComponent implements OnInit {

  inviteeList = inviteeList;

}
