import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMenuItemIngredientComponent } from './search-menu-item-ingredient.component';

describe('SearchMenuItemIngredientComponent', () => {
  let component: SearchMenuItemIngredientComponent;
  let fixture: ComponentFixture<SearchMenuItemIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMenuItemIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMenuItemIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
