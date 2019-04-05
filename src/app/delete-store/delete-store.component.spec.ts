import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStoreComponent } from './delete-store.component';

describe('DeleteStoreComponent', () => {
  let component: DeleteStoreComponent;
  let fixture: ComponentFixture<DeleteStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
