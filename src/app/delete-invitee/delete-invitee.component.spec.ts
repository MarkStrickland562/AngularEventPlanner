import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInviteeComponent } from './delete-invitee.component';

describe('DeleteInviteeComponent', () => {
  let component: DeleteInviteeComponent;
  let fixture: ComponentFixture<DeleteInviteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInviteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInviteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
