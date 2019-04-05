import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenusComponent } from './show-menus.component';

describe('ShowMenusComponent', () => {
  let component: ShowMenusComponent;
  let fixture: ComponentFixture<ShowMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
