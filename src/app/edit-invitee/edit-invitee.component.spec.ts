import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInviteeComponent } from './edit-invitee.component';

describe('EditInviteeComponent', () => {
  let component: EditInviteeComponent;
  let fixture: ComponentFixture<EditInviteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInviteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInviteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
