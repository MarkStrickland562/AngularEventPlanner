import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuItemIngredientComponent } from './new-menu-item-ingredient.component';

describe('NewMenuItemIngredientComponent', () => {
  let component: NewMenuItemIngredientComponent;
  let fixture: ComponentFixture<NewMenuItemIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMenuItemIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMenuItemIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
