import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuItemIngredientComponent } from './edit-menu-item-ingredient.component';

describe('EditMenuItemIngredientComponent', () => {
  let component: EditMenuItemIngredientComponent;
  let fixture: ComponentFixture<EditMenuItemIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuItemIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuItemIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
