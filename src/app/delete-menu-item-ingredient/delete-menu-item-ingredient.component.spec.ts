import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMenuItemIngredientComponent } from './delete-menu-item-ingredient.component';

describe('DeleteMenuItemIngredientComponent', () => {
  let component: DeleteMenuItemIngredientComponent;
  let fixture: ComponentFixture<DeleteMenuItemIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMenuItemIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMenuItemIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
