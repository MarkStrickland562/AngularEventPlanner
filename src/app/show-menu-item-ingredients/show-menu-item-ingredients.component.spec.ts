import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuItemIngredientsComponent } from './show-menu-item-ingredients.component';

describe('ShowMenuItemIngredientsComponent', () => {
  let component: ShowMenuItemIngredientsComponent;
  let fixture: ComponentFixture<ShowMenuItemIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMenuItemIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuItemIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
