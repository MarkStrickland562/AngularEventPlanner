import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInviteesComponent } from './show-invitees.component';

describe('ShowInviteesComponent', () => {
  let component: ShowInviteesComponent;
  let fixture: ComponentFixture<ShowInviteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInviteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
