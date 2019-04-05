import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInviteeComponent } from './new-invitee.component';

describe('NewInviteeComponent', () => {
  let component: NewInviteeComponent;
  let fixture: ComponentFixture<NewInviteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInviteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInviteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
