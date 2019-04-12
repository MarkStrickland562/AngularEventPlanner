import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopRightNavComponent } from './app-top-right-nav.component';

describe('AppTopRightNavComponent', () => {
  let component: AppTopRightNavComponent;
  let fixture: ComponentFixture<AppTopRightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTopRightNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTopRightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
