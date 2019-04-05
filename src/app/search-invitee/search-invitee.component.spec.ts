import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInviteeComponent } from './search-invitee.component';

describe('SearchInviteeComponent', () => {
  let component: SearchInviteeComponent;
  let fixture: ComponentFixture<SearchInviteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInviteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInviteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
